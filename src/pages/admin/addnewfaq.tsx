import EditIcon from '@mui/icons-material/Edit'
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/client'
import router from 'next/router'
import React, { useState } from 'react'
import { AddNewFaqForm } from '../../components/AddNewFaqForm'
import { EditFaqForm } from '../../components/EditFaqForm'
import Layout from '../../components/layout/layout'
import { serializeData } from '../../lib/serialize'
import Faq from '../../models/shopFaq'
import { ERole } from '../../types/ERole'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '50px',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })
)

export type TProps = {
  faqList: IListOfFaq[] | undefined
}

export interface IListOfFaq {
  answer: string
  question: string
  _id: string
}

export default function AddNewFaq({ faqList }: TProps) {
  const classes = useStyles()

  const [session, loading] = useSession()
  const [id, setId] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const [toggleVisability, setToggleVisability] = useState({
    addNewFaq: false,
    editForm: false,
    addContentButton: true,
  })

  const [reloadFaqForm, setReloadFaqForm] = useState(false)

  if (typeof window !== 'undefined' && loading) return null

  if (!session) {
    return (
      <Layout title='Администрирование'>
        <h1>Вы должны авторизоваться</h1>;
      </Layout>
    )
  }
  if (session.role !== ERole.Admin) {
    return (
      <Layout title='Администрирование'>
        <h1>Вы должны быть администратором</h1>;
      </Layout>
    )
  }

  const addNewFaq = () => {
    setToggleVisability({
      addNewFaq: true,
      editForm: false,
      addContentButton: false,
    })
  }

  const updateFaqList = () => {
    router.replace(router.asPath)
  }

  const handleEdit = (id: string, question: string, answer: string) => () => {
    window.scrollTo(0, 0)
    reloadFaqForm ? setReloadFaqForm(false) : setReloadFaqForm(true)
    setToggleVisability({
      addNewFaq: false,
      editForm: true,
      addContentButton: false,
    })

    setId(id)
    setQuestion(question)
    setAnswer(answer)
  }

  return (
    <Layout title='Администрирование | Редактировать страницу вопросов и ответов'>
      <div className={classes.root}>
        <Grid container spacing={2} justifyContent='center' alignItems='center'>
          <Grid item>
            {toggleVisability.addContentButton && (
              <Button
                variant='outlined'
                color='secondary'
                fullWidth
                onClick={addNewFaq}
              >
                Добавить новый вопрос (ответ)
              </Button>
            )}
          </Grid>

          <Grid item>
            {toggleVisability.editForm && (
              <EditFaqForm
                id={id}
                updateFaqList={updateFaqList}
                setToggleVisability={setToggleVisability}
                reloadFaqForm={reloadFaqForm}
                answer={answer}
                question={question}
              />
            )}
          </Grid>
          <Grid item>
            {toggleVisability.addNewFaq && (
              <AddNewFaqForm setToggleVisability={setToggleVisability} />
            )}
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Вопрос</TableCell>
                <TableCell>Ответ</TableCell>
                <TableCell align='center'>Редактировать</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {faqList &&
                faqList.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell component='th' scope='row'>
                      {row.question}
                    </TableCell>
                    <TableCell>{row.answer}</TableCell>
                    <TableCell align='center'>
                      <IconButton
                        color='primary'
                        aria-label='upload picture'
                        component='span'
                        onClick={handleEdit(row._id, row.question, row.answer)}
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await Faq.find({}).select('-date -__v')
    const dataSerialized = serializeData(data)
    return {
      props: { faqList: dataSerialized },
    }
  } catch (err) {
    console.error(err)
    return {
      notFound: true,
    }
  }
}

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
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/client'
import router from 'next/router'
import React, { useState } from 'react'
import Layout from '../../components/layout/layout'
import Faq from '../../models/shopFaq'
import { ERole } from '../../types/ERole'
import EditIcon from '@mui/icons-material/Edit'
import { AddNewFaqForm } from '../../components/AddNewFaqForm'
import { EditFaqForm } from '../../components/EditFaqForm'

export interface AddNewFaqProps {
  res: IListOfFaq[] | undefined
}

export interface IListOfFaq {
  answer: string
  question: string
  _id: string
}

export default function AddNewFaq({ res }: AddNewFaqProps) {
  const [session, loading] = useSession()
  const [showAddFaqForm, setShowAddFaqForm] = useState(false)
  const [visible, setVisible] = useState(false)
  const [id, setId] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  if (typeof window !== 'undefined' && loading) return null
  if (!session) {
    return (
      <Layout title='Admin profile'>
        <h1>Вы должны авторизоваться</h1>;
      </Layout>
    )
  }
  if (session.role !== ERole.Admin) {
    return (
      <Layout title='Admin profile'>
        <h1>Вы должны быть администратором</h1>;
      </Layout>
    )
  }

  const addNewFaq = () => {
    setShowAddFaqForm(true)
    console.log('add new faq')
  }

  const updateFaqList: Function = () => {
    router.replace(router.asPath)
  }

  const handleEdit = (id: string, question: string, answer: string) => () => {
    setVisible(true)
    setShowAddFaqForm(false)
    setId(id)
    setQuestion(question)
    setAnswer(answer)
  }

  const changeVisibility: Function = () => {
    setVisible(false)
  }

  return (
    <Layout title='Администрирование | Редактировать страницу вопросов и ответов'>
      <div>
        <Grid container spacing={2} justifyContent='center' alignItems='center'>
          <Grid item>
            {!showAddFaqForm && (
              <Button
                variant='outlined'
                color='secondary'
                fullWidth
                onClick={addNewFaq}
              >
                Добавить новый вопрос(ответ)
              </Button>
            )}
          </Grid>

          <Grid item>
            {visible && !showAddFaqForm && (
              <EditFaqForm
                id={id}
                updateFaqList={updateFaqList}
                changeVisibility={changeVisibility}
                answer={answer}
                question={question}
              />
            )}
          </Grid>
          <Grid item>{showAddFaqForm && <AddNewFaqForm />}</Grid>
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
              {res &&
                res.map((row) => (
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
        {/* <pre>{JSON.stringify(res, null, 4)}</pre> */}
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await Faq.find({})
    const resSerialized = data.map(
      //@ts-ignore
      ({ _doc: { _id, date, __v, ...rest } }) => {
        rest._id = _id.toString()
        return rest
      }
    )
    return {
      props: { res: resSerialized }, // will be passed to the page component as props
    }
  } catch (err) {
    console.error(err)
    return {
      notFound: true,
    }
  }
}

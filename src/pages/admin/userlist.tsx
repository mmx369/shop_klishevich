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
import { InferGetServerSidePropsType } from 'next'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AddNewUserForm } from '../../components/AddNewUserForm'
import { EditUserlistForm } from '../../components/EditUserlistForm'
import Layout from '../../components/layout/layout'
import { serializeData } from '../../lib/serialize'
import ShopUser from '../../models/shopUser'
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

export interface IListOfUsers {
  date?: Date
  email: string
  name: string
  role: string
  orders: string[]
  _id: string
}

export default function Userlist({
  userlist,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const classes = useStyles()
  const router = useRouter()

  const [session, loading] = useSession()
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')

  const [reloadEditForm, setReloadEditForm] = useState(false)

  const [toggleVisability, setToggleVisability] = useState({
    addUserForm: false,
    editForm: false,
    addUserButton: true,
  })

  if (typeof window !== 'undefined' && loading) return null

  if (!session) {
    return (
      <Layout title='Администрирование'>
        <h1>Вы должны авторизоваться.</h1>
      </Layout>
    )
  }
  if (session.role !== ERole.Admin) {
    return (
      <Layout title='Администрирование'>
        <h1>Вы должны иметь права администратора.</h1>
      </Layout>
    )
  }

  const updateUserList = () => {
    router.replace(router.asPath)
  }

  const handleEdit = (id: string, email: string) => () => {
    reloadEditForm ? setReloadEditForm(false) : setReloadEditForm(true)
    setToggleVisability({
      addUserForm: false,
      addUserButton: false,
      editForm: true,
    })
    setId(id)
    setEmail(email)
  }

  const addNewUser = () => {
    setToggleVisability({
      addUserForm: true,
      addUserButton: false,
      editForm: false,
    })
  }

  return (
    <Layout title='Администрирование | Редактировать список пользователей'>
      <div className={classes.root}>
        <Grid container spacing={2} justifyContent='center' alignItems='center'>
          <Grid item>
            {toggleVisability.addUserButton && (
              <Button
                variant='outlined'
                color='secondary'
                fullWidth
                onClick={addNewUser}
              >
                Добавить пользователя
              </Button>
            )}
          </Grid>

          <Grid item>
            {toggleVisability.editForm && (
              <EditUserlistForm
                id={id}
                email={email}
                updateUserList={updateUserList}
                setToggleVisability={setToggleVisability}
                reloadEditForm={reloadEditForm}
              />
            )}
          </Grid>

          <Grid item>
            {toggleVisability.addUserForm && (
              <AddNewUserForm setToggleVisability={setToggleVisability} />
            )}
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Электронная почта</TableCell>
                <TableCell align='right'>Имя</TableCell>
                <TableCell align='right'>Роль</TableCell>
                <TableCell align='right'>Заказы</TableCell>
                <TableCell align='right'>Редактировать</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userlist &&
                userlist.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell component='th' scope='row'>
                      {row.email}
                    </TableCell>
                    <TableCell align='right'>{row.name}</TableCell>
                    <TableCell align='right'>{row.role}</TableCell>
                    <TableCell align='right'>
                      {row.orders.length > 0 ? row.orders : 'Нет заказов'}
                    </TableCell>
                    <TableCell align='right'>
                      <IconButton
                        color='primary'
                        aria-label='upload picture'
                        component='span'
                        onClick={handleEdit(row._id, row.email)}
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

export const getServerSideProps = async () => {
  const data = await ShopUser.find({}).select('-__v -date -cart')
  const userlist: IListOfUsers[] = serializeData(data)

  return {
    props: { userlist },
  }
}

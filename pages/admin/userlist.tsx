import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/client'
import React, { useState } from 'react'
import Layout from '../../components/layout/layout'
import { ERole } from '../../types/ERole'
import User from '../../models/shopUser'
import {
  Button,
  Box,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { useRouter } from 'next/router'
import { EditUserlistForm } from '../../components/EditUserlistForm'
import { AddNewUserForm } from '../../components/AddNewUserForm'

export interface UserListProps {
  res: string | undefined
}

export interface IListOfUsers {
  date: Date
  email: string
  name: string
  role: string
  orders: string[]
  _id: string
}

export default function Userlist({ res }: UserListProps) {
  const router = useRouter()

  const [session, loading] = useSession()
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')

  const [visible, setVisible] = useState(false)
  const [showAddUserForm, setShowAddUserForm] = useState(false)

  const list: IListOfUsers[] = JSON.parse(res)
  console.log(list)

  if (typeof window !== 'undefined' && loading) return null
  if (!session) {
    return (
      <Layout title='Admin profile'>
        <h1>You must sign in</h1>;
      </Layout>
    )
  }
  if (session.role !== ERole.Admin) {
    return (
      <Layout title='Admin profile'>
        <h1>You must be an admin to see this page</h1>;
      </Layout>
    )
  }

  const updateUserList: Function = () => {
    router.replace(router.asPath)
  }

  const handleEdit = (id: string, email: string) => () => {
    setVisible(true)
    setShowAddUserForm(false)
    setId(id)
    setEmail(email)
  }

  const changeVisibility: Function = () => {
    setVisible(false)
  }

  const addNewUser = () => {
    setShowAddUserForm(true)
    console.log('add new user')
  }

  return (
    <Layout title='Администрирование | Редактировать список пользователей'>
      <div>
        <Grid container spacing={2} justifyContent='center' alignItems='center'>
          <Grid item>
            {!showAddUserForm && (
              <Button
                variant='outlined'
                color='secondary'
                fullWidth
                onClick={addNewUser}
              >
                Добавить нового пользователя
              </Button>
            )}
          </Grid>

          <Grid item>
            {visible && !showAddUserForm && (
              <EditUserlistForm
                id={id}
                email={email}
                updateUserList={updateUserList}
                changeVisibility={changeVisibility}
              />
            )}
          </Grid>

          <Grid item>{showAddUserForm && <AddNewUserForm />}</Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>E-mail</TableCell>
                <TableCell align='right'>Имя</TableCell>
                <TableCell align='right'>Роль</TableCell>
                <TableCell align='right'>Заказы</TableCell>
                <TableCell align='right'>Редактировать</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list &&
                list.map((row) => (
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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await User.find({})
    if (!data) {
      return {
        notFound: true,
      }
    }
    const res = JSON.stringify(data)
    return {
      props: { res }, // will be passed to the page component as props
    }
  } catch (e) {
    console.error(e)
  }
}

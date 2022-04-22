import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
} from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as yup from 'yup'

const validationSchema = yup.object({
  username: yup
    .string()
    .min(3, 'Имя пользователя должно содержать минимум 3 символа')
    .max(40, 'Имя пользователя должно содержать не более 40 символов')
    .required('Имя пользователя обязательно'),
  email: yup
    .string()
    .email('Введите корректный адрес')
    .required('Поле является обязательным'),
  role: yup.string().required('Поле является обязательным'),
})

type TProps = {
  id: string
  email: string
  updateUserList: () => void
  setToggleVisability: (x: {
    addUserForm: boolean
    editForm: boolean
    addUserButton: boolean
  }) => void
  reloadEditForm: boolean
}

export const EditUserlistForm = ({
  id,
  email,
  updateUserList,
  setToggleVisability,
  reloadEditForm,
}: TProps) => {
  const router = useRouter()

  const [initialValues, setInitialValues] = useState({
    username: '',
    email: '',
    role: '',
  })

  useEffect(() => {
    axios
      .get(`${process.env.RESTURL}/api/getuserdata?id=${id}`)
      .then(({ data }) => {
        setInitialValues({
          username: data.name || '',
          email: data.email || '',
          role: data.role || '',
        })
      })
      .catch((err) => console.log(err))
  }, [reloadEditForm])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const updateUserHandler = async () => {
        try {
          const updateUser = {
            username: values.username,
            email: values.email,
            role: values.role,
            id,
          }
          const res = await axios.put(
            `${process.env.RESTURL}/api/updateuser`,
            updateUser
          )
          if (res.status === 200) {
            toast.success(
              `Данные пользователя ${values.username} успешно изменены`,
              {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000,
              }
            )
            updateUserList()
            setToggleVisability({
              addUserForm: false,
              editForm: false,
              addUserButton: true,
            })
          }
        } catch (e) {
          toast.error(`Ошибка: ${e.response.data.message}`, {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 5000,
          })
          console.log(e)
        }
      }
      updateUserHandler()
    },
  })

  const deleteHandler = async () => {
    try {
      await axios.delete(`${process.env.RESTURL}/api/deleteuser`, {
        data: id,
      })
      toast.success(`Пользователь удален`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      })
      setToggleVisability({
        addUserForm: false,
        editForm: false,
        addUserButton: true,
      })
      router.replace(router.asPath)
    } catch (e) {
      toast.error(`Ошибка: ${e.response.data.message}`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      })
      console.error(e)
    }
  }

  const cancelEditUser = () => {
    setToggleVisability({
      addUserForm: false,
      editForm: false,
      addUserButton: true,
    })
  }

  return (
    <>
      <Grid container spacing={2} direction='column'>
        <Grid item sx={{ textAlign: 'center' }}>
          <h3>Пользователь: {email}</h3>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <Grid item>
            <TextField
              id='username'
              name='username'
              label='Имя пользователя'
              type='text'
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              variant='standard'
              margin='none'
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              id='email'
              name='email'
              label='Электронная почта'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              variant='standard'
              margin='none'
              fullWidth
            />
          </Grid>
          <Grid item>
            <FormControl fullWidth margin='normal' size='small'>
              <InputLabel id='role' />
              <TextField
                select
                id='role'
                label='Роль'
                variant='outlined'
                name='role'
                value={formik.values.role}
                onChange={formik.handleChange}
                error={formik.touched.role && Boolean(formik.errors.role)}
                helperText={formik.touched.role && formik.errors.role}
              >
                <MenuItem value={''}>
                  <em>Выберите роль</em>
                </MenuItem>
                <MenuItem value={'admin'}>Администратор</MenuItem>
                <MenuItem value={'client'}>Клиент</MenuItem>
              </TextField>
            </FormControl>
          </Grid>
          <Grid item sx={{ textAlign: 'center' }}>
            <Button
              sx={{ margin: '5px' }}
              variant='outlined'
              color='secondary'
              type='submit'
            >
              Сохранить
            </Button>
            <Button
              sx={{ margin: '5px' }}
              variant='outlined'
              color='secondary'
              onClick={cancelEditUser}
            >
              Отменить
            </Button>
          </Grid>
          <Grid item sx={{ marginBottom: '5px' }}>
            <Button
              variant='outlined'
              color='secondary'
              fullWidth
              onClick={deleteHandler}
            >
              Удалить пользователя
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  )
}

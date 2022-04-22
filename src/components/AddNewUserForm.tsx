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
import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as yup from 'yup'

toast.configure()

export type TFormUserFields = {
  username: string
  email: string
  role: string
}

const initialValues: TFormUserFields = {
  username: '',
  email: '',
  role: 'client',
}

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
  setToggleVisability: (x: {
    addUserForm: false
    editForm: false
    addUserButton: true
  }) => void
}

export const AddNewUserForm = ({ setToggleVisability }: TProps) => {
  const router = useRouter()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setStatus }) => {
      const addNewUserHandler = async () => {
        try {
          const addNewUser = {
            username: values.username,
            email: values.email,
            role: values.role,
          }
          await axios.post(`${process.env.RESTURL}/api/addnewuser`, addNewUser)
          toast.success(`Пользователь ${values.username} успешно добавлен`, {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 5000,
          })
          router.replace(router.asPath)
          setToggleVisability({
            addUserForm: false,
            editForm: false,
            addUserButton: true,
          })
        } catch (e) {
          toast.error(`Ошибка: ${e.response.data.message}`, {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 5000,
          })
          console.error(e)
          setStatus({ success: false })
        }
      }
      addNewUserHandler()
    },
  })

  const cancelAddUser = () => {
    setToggleVisability({
      addUserForm: false,
      editForm: false,
      addUserButton: true,
    })
  }

  return (
    <div>
      <Grid container direction='column'>
        <Grid item>
          <h3 style={{ textAlign: 'center' }}>Новый пользователь</h3>
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
          <Grid item>
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
              onClick={cancelAddUser}
            >
              Отменить
            </Button>
          </Grid>
        </form>
      </Grid>
    </div>
  )
}

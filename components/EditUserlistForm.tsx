import React, { useState } from 'react'
import axios from 'axios'
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export interface EditFormProps {
  id: string
  email: string
  updateUserList: Function
  changeVisibility: Function
}

export const EditUserlistForm = ({
  id,
  email,
  updateUserList,
  changeVisibility,
}: EditFormProps) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [newEmail, setNewEmail] = useState('')

  const changeHandlerName = (event: React.ChangeEvent<{ value: unknown }>) => {
    setName(event.target.value as string)
  }

  const changeHandlerRole = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRole(event.target.value as string)
  }

  const changeHandlerEmail = (event: React.ChangeEvent<{ value: unknown }>) => {
    setNewEmail(event.target.value as string)
  }

  const deleteHandler = async () => {
    try {
      await axios.delete(`${process.env.RESTURL}/api/deleteuser`, {
        data: id,
      })
      toast.success(`Пользователь успешно удален`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
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

  const updateHandler = async () => {
    try {
      const updateUser = {
        name,
        role,
        email: newEmail,
        id,
      }
      const res = await axios.put(
        `${process.env.RESTURL}/api/updateuser`,
        updateUser
      )
      if (res.status === 200) {
        toast.success(`Данные пользователя ${name} успешно изменены`, {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 5000,
        })
        updateUserList()
        setName('')
        setRole('')
        setNewEmail('')
        changeVisibility()
      }
    } catch (e) {
      toast.error(`Ошибка: ${e.response.data.message}`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      })
      console.log(e)
    }
  }

  return (
    <React.Fragment>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <div>
            <h3>Пользователь: {email}</h3>
          </div>
        </Grid>
        <div>
          <Grid item>
            <TextField
              onChange={changeHandlerName}
              margin="normal"
              name="name"
              value={name}
              type="text"
              label="Имя"
              fullWidth
            />
          </Grid>
        </div>
        <div>
          <Grid item>
            <TextField
              onChange={changeHandlerEmail}
              margin="normal"
              name="email"
              value={newEmail}
              type="text"
              label="Электронная почта"
              fullWidth
            />
          </Grid>
        </div>
        <Grid item>
          <div>
            <FormControl fullWidth>
              <InputLabel id="select-label">Роль</InputLabel>
              <Select
                labelId="select-label"
                value={role}
                onChange={changeHandlerRole}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'admin'}>Администратор</MenuItem>
                <MenuItem value={'client'}>Клиент</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={updateHandler}
          >
            Сохранить изменения
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={deleteHandler}
          >
            Удалить пользователя
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

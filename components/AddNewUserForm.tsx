import React, { useState } from 'react'
import axios from 'axios'
import {
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'

export const AddNewUserForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')

  const changeHandlerName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value as string)
  }

  const changeHandlerEmail = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value as string)
  }
  const changeHandlerRole = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value as string)
  }

  const addNewUser = async () => {
    try {
      const addNewUser = {
        name,
        email,
        role,
      }

      const res = await axios.post(
        `${process.env.RESTURL}/api/addnewuser`,
        addNewUser
      )

      setName('')
      setEmail('')
      setRole('')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <React.Fragment>
      <div>
        <Grid container direction="column">
          <Grid item>
            <div>
              <h3>Новый пользователь</h3>
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
                value={email}
                type="text"
                label="Электронная почта"
                fullWidth
              />
            </Grid>
          </div>

          <Grid item>
            <div>
              <FormControl fullWidth>
                <InputLabel id="select-label">role</InputLabel>
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
            <Button variant="outlined" color="secondary" onClick={addNewUser}>
              Сохранить
            </Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

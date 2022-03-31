import React from 'react'
import { createStyles, makeStyles } from '@mui/styles'
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  InputLabel,
  Input,
  FormControl,
  Select,
} from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
)

export interface DialogSelectProps {
  currStatus: string
  currId: string
}

export default function DialogSelect({
  currStatus,
  currId,
}: DialogSelectProps) {
  const classes = useStyles()
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  const [status, setStatus] = React.useState<string>(currStatus)

  const handleChange = (event: any) => {
    setStatus(String(event.target.value) || '')
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setStatus(currStatus)
  }

  const handleSaveChange = async () => {
    console.log(status)
    const newStatus = {
      id: currId,
      status,
    }
    await axios.put(
      `${process.env['RESTURL']}/api/changestatusorder`,
      newStatus
    )
    setOpen(false)
    setStatus(currStatus)
    router.reload()
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>Изменить статус заказа</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Выберите статус заказа</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor='order-status'>Статус заказа</InputLabel>
              <Select
                native
                value={status}
                onChange={handleChange}
                input={<Input defaultValue={status} />}
              >
                <option aria-label='Нет' value='' />
                <option value={'open'}>Открыт</option>
                <option value={'paid'}>Оплачен</option>
                <option value={'shipped'}>Отправлен</option>
                <option value={'received'}>Получен</option>
                <option value={'closed'}>Закрыт</option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Отменить
          </Button>
          <Button onClick={handleSaveChange} color='primary'>
            Изменить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

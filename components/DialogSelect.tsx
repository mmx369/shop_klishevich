import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import axios from 'axios'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme: Theme) =>
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

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
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
    const res = await axios.put(
      `${process.env.RESTURL}/api/changestatusorder`,
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
              <InputLabel htmlFor="order-status">Статус заказа</InputLabel>
              <Select
                native
                value={status}
                onChange={handleChange}
                input={<Input defaultValue={status} />}
              >
                <option aria-label="Нет" value="" />
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
          <Button onClick={handleClose} color="primary">
            Отменить
          </Button>
          <Button onClick={handleSaveChange} color="primary">
            Изменить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

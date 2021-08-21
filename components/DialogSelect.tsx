import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

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

export default function DialogSelect() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [status, setStatus] = React.useState<number | string>('')

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatus(Number(event.target.value) || '')
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>Изменить статус заказа</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Выберите статус заказа</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel id="order-status">Статус заказа</InputLabel>
              <Select
                labelId="order-status"
                id="order-status-select"
                value={status}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value="">
                  <em>Нет</em>
                </MenuItem>
                <MenuItem value={'open'}>Открыт</MenuItem>
                <MenuItem value={'paid'}>Оплачен</MenuItem>
                <MenuItem value={'shipped'}>Отправлен</MenuItem>
                <MenuItem value={'received'}>Получен</MenuItem>
                <MenuItem value={'closed'}>Закрыт</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отменить
          </Button>
          <Button onClick={handleClose} color="primary">
            Изменить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

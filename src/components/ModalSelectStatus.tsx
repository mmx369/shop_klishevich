import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export type TProps = {
  currStatus: string
  currId: string
}

export function ModalSelectStatus({ currStatus, currId }: TProps) {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState(currStatus)

  const handleChange = (event: SelectChangeEvent<string>) => {
    setStatus(event.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setStatus(currStatus)
  }

  const handleSaveChange = async () => {
    const newStatus = {
      id: currId,
      status,
    }
    await axios.put(`${process.env.RESTURL}/api/changestatusorder`, newStatus)
    setOpen(false)
    setStatus(currStatus)
    router.reload()
  }

  return (
    <div>
      <Button onClick={handleClickOpen} variant='outlined' size='small'>
        Изменить статус заказа
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Grid container direction='column' spacing={2}>
            <Grid item>
              <h3 style={{ textAlign: 'center' }}>Выберите статус заказа</h3>
            </Grid>
            <Grid item>
              <FormControl fullWidth>
                <InputLabel id='order-status'>Статус заказа</InputLabel>
                <Select
                  labelId='order-status'
                  id='order-status-select'
                  value={status}
                  label='Статус заказа'
                  onChange={handleChange}
                  variant='standard'
                >
                  <MenuItem value={'open'}>Открыт</MenuItem>
                  <MenuItem value={'paid'}>Оплачен</MenuItem>{' '}
                  <MenuItem value={'shipped'}>Отправлен</MenuItem>{' '}
                  <MenuItem value={'recieved'}>Получен</MenuItem>{' '}
                  <MenuItem value={'closed'}>Закрыт</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sx={{ textAlign: 'center' }}>
              <Button
                onClick={handleClose}
                color='primary'
                variant='outlined'
                sx={{ margin: '5px' }}
              >
                Отменить
              </Button>
              <Button
                onClick={handleSaveChange}
                color='primary'
                variant='outlined'
                sx={{ margin: '5px' }}
              >
                Изменить
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}

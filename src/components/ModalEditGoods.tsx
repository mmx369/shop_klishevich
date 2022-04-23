import { Backdrop, Box, Button, Fade, Input, Modal } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import axios from 'axios'
import router from 'next/router'
import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ROUBLE } from '../constants'

const useStyles = makeStyles(() =>
  createStyles({
    input: {
      width: 42,
      margin: 10,
    },
  })
)

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

type TProps = {
  open: boolean
  price: number
  amount: number
  id: string
  handleClose: () => void
}

export default function ModalEditGoods({
  open,
  price,
  amount,
  id,
  handleClose,
}: TProps) {
  const classes = useStyles()
  const [value, setValue] = React.useState<number>(price > 0 ? price : 0)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
  }
  const handleBlur = () => {
    if (value < 0) {
      setValue(0)
    }
  }

  const updatePriceHandler = async () => {
    try {
      const updatePrice = {
        newPrice: value,
        id,
      }
      const res = await axios.put(
        `${process.env.RESTURL}/api/updateprice`,
        updatePrice
      )
      if (res.status === 200) {
        toast.success('Цена успешна изменена', {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 5000,
        })
        setValue(0)
        handleClose()
        router.replace(router.asPath)
      }
    } catch (e) {
      toast.error(`Ошибка: ${e.response.data.message}`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      })
      console.log(e)
    }
  }

  const updateAmountHandler = async () => {
    try {
      const updateAmount = {
        newAmount: value,
        id,
      }
      const res = await axios.put(
        `${process.env.RESTURL}/api/updateamount`,
        updateAmount
      )
      if (res.status === 200) {
        toast.success('Количество успешно изменено', {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 5000,
        })
        setValue(0)
        handleClose()
        router.replace(router.asPath)
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
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {price && (
              <h2 id='transition-modal-title'>Установите новую цену</h2>
            )}
            {price && (
              <p id='transition-modal-description'>
                Старая цена: {price} {ROUBLE}
              </p>
            )}
            {amount && (
              <h2 id='transition-modal-title'>Установите новое количество</h2>
            )}
            {amount && (
              <p id='transition-modal-description'>
                Старое количество: {amount} ед.
              </p>
            )}
            <Input
              className={classes.input}
              value={value}
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 1,
                min: 0,
                max: 100000,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
            <Button
              variant='contained'
              color='primary'
              size='small'
              onClick={price ? updatePriceHandler : updateAmountHandler}
            >
              Сохранить
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

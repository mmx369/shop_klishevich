import React from 'react'
import { makeStyles, createStyles } from '@mui/styles'
import { Button, Input, Modal, Backdrop, Fade } from '@mui/material'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 42,
      margin: 10,
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
)

type TProps = {
  open: boolean
  price: number
  amount: number
  id: string
  handleClose: any
  setOpen: any
  handleOpen: any
}

export default function ModalEditGoods({
  open,
  price,
  amount,
  id,
  setOpen,
  handleOpen,
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
  console.log(setOpen, handleOpen)
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
        toast.success('Количество успешна изменено', {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 5000,
        })
        setValue(0)
        handleClose()
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
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {price && (
              <h2 id='transition-modal-title'>Установите новую цену</h2>
            )}
            {price && (
              <p id='transition-modal-description'>Старая цена: {price} руб.</p>
            )}
            {amount && (
              <h2 id='transition-modal-title'>Установите новое количество</h2>
            )}
            {amount && (
              <p id='transition-modal-description'>
                Старое количество: {amount} руб.
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
              onClick={price ? updatePriceHandler : updateAmountHandler}
            >
              Сохранить
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
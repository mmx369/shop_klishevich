import React, { useEffect } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { Button, Input } from '@material-ui/core'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const useStyles = makeStyles((theme: Theme) =>
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

export default function ModalEditGoods({
  open,
  price,
  id,
  setOpen,
  handleOpen,
  handleClose,
}) {
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

      console.log(222, updatePrice)

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

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
            <h2 id="transition-modal-title">Установите новую цену</h2>
            <p id="transition-modal-description">Старая цена: {price} руб.</p>
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
              variant="contained"
              color="primary"
              onClick={updatePriceHandler}
            >
              Сохранить
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

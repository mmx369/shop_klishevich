import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React, { useState } from 'react'
import { translateCategory } from '../translate/category'
import { translateCountry } from '../translate/country'
import ModalEditGoods from './ModalEditGoods'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      maxWidth: 275,
      minHeight: 300,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  })
)

export default function ListOfGoods({ res }) {
  const classes = useStyles()

  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [id, setId] = useState('')
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState('')

  const handleOpen = (id, price, amount) => {
    setOpen(true)
    setId(id)
    setPrice(price)
    setAmount(amount)
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.RESTURL}/api/deleteitem`, { data: id })
      toast.success('Позиция успешна удалена', {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      })
      router.replace(router.asPath)
    } catch (e) {
      toast.error(`Ошибка: ${e.response.data.message}`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      })
      console.log(e)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Grid container spacing={2}>
        {res &&
          res.res.map((item) => (
            <Grid item key={item._id}>
              <Card elevation={5} className={classes.card}>
                <CardHeader
                  title={`${translateCategory(
                    item.category
                  )} | ${translateCountry(item.country)}`}
                  subheader={item.nameOfGoods}
                />
                <CardMedia
                  className={classes.media}
                  image={item.imageUrl[0]}
                  title={item.nameOfGoods}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Цена: {item.priceOfGoods} рублей. Остаток:{' '}
                    {item.amountOfGoods > 0
                      ? item.amountOfGoods + ' шт.'
                      : 'Товар отсутствует'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() =>
                      handleOpen(item._id, item.priceOfGoods, null)
                    }
                  >
                    Изменить цену
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() =>
                      handleOpen(item._id, null, item.amountOfGoods)
                    }
                  >
                    Изменить количество
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleDelete(item._id)}
                  >
                    Удалить товар
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
      <ModalEditGoods
        open={open}
        price={price}
        amount={amount}
        id={id}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <pre>{JSON.stringify(res, null, 3)}</pre>
    </>
  )
}

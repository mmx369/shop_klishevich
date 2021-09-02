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

  const [open, setOpen] = useState(false)
  const [id, setId] = useState('')
  const [price, setPrice] = useState('')

  const handleOpen = (id, price) => {
    setOpen(true)
    setId(id)
    setPrice(price)
  }

  const handleClose = () => {
    setOpen(false)
  }
  console.log(676776, res.res)

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
                    onClick={() => handleOpen(item._id, item.priceOfGoods)}
                  >
                    Изменить цену
                  </Button>
                  <Button size="small" color="primary">
                    Изменить количество
                  </Button>
                  <Button size="small" color="primary">
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
        id={id}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <pre>{JSON.stringify(res, null, 3)}</pre>
    </>
  )
}

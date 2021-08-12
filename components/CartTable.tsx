import React from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from '../redux/reducers'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 100,
  },
})

export const CartTable = () => {
  const classes = useStyles()
  const cart = useSelector((state: IRootState) => state.cart) || []

  return (
    <>
      <div>
        <Grid container spacing={1}>
          {cart.map((item) => (
            <Grid key={item._id} item xs={12} sm={6}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.imageUrl[0]}
                    title={item.nameOfGoods}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h4">
                      {item.nameOfGoods}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Количество: {item.amountOfGoods} шт.
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Цена за единицу: {item.priceOfGoods} руб.
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Общая стоимость: {item.priceOfGoods * item.amountOfGoods}{' '}
                      руб.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
          <Typography variant="h6" component="p">
            Итого к оплате:{' '}
            {cart.reduce(function (acc, sum) {
              return acc + sum.priceOfGoods * sum.amountOfGoods
            }, 0)}{' '}
            руб.
          </Typography>
        </Grid>
        {/* <pre>{JSON.stringify(cart, null, 4)}</pre> */}
      </div>
    </>
  )
}

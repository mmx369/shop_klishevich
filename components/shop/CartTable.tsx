import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../redux/reducers'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Button, Grid } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { SHIPPING_PRICES } from '../../constants'
import { addShippingPrice } from '../../redux/actions/shippingAction'
import { deleteItem } from '../../redux/actions/cartActions'
import router from 'next/router'

const useStyles = makeStyles({
  root: {
    maxWidth: 230,
  },
  media: {
    backgroundSize: 'contain',
  },
})

export const CartTable = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [value, setValue] = useState('courier')

  useEffect(() => {
    dispatch(addShippingPrice(SHIPPING_PRICES[value]))
  }, [value])

  const cart = useSelector((state: IRootState) => state.cart) || []
  console.log('Cart ', cart)

  const totalPrice = cart.reduce(function (acc, sum) {
    return acc + sum.priceOfGoods * sum.amountOfGoods
  }, 0)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  const handleDispatch = (id: string) => {
    dispatch(deleteItem(id))
  }

  if (cart.length === 0) {
    return <div>Ваша корзина пуста</div>
  }

  return (
    <>
      <div>
        <Typography variant='h6'>Ваши покупки</Typography>
      </div>

      <div>
        <Grid container spacing={3}>
          {cart.map((item) => (
            <Grid item key={item._id}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    className={classes.media}
                    image={item.imageUrl[0]}
                    title={item.nameOfGoods}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='subtitle1' component='h4'>
                      {item.nameOfGoods}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Количество: {item.amountOfGoods} шт.
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Цена за единицу: {item.priceOfGoods} руб.
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Общая стоимость: {item.priceOfGoods * item.amountOfGoods}{' '}
                      руб.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Button
                  size='small'
                  variant='contained'
                  color='primary'
                  fullWidth
                  onClick={() => {
                    console.log('Deleting...', item._id)
                    handleDispatch(item._id)
                  }}
                >
                  удалить
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <div>
        <Typography variant='h6'>Способ доставки</Typography>
        <Grid item xs={12}>
          <FormControl component='fieldset'>
            <FormLabel component='legend'></FormLabel>
            <RadioGroup
              aria-label='shipping'
              name='shipping'
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value='courier'
                control={<Radio />}
                label='Курьер (гор.Москва 400 руб.)'
              />
              <FormControlLabel
                value='mail'
                control={<Radio />}
                label='Заказное письмо 1 класса (Почта России) по России 200 руб.'
              />
              <FormControlLabel
                value='mailOverseas'
                control={<Radio />}
                label='Регистрируемое письмо Почтой России за рубеж 500 руб.'
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='subtitle2' component='p'>
            Итого за товар: {totalPrice} руб.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='subtitle2' component='p'>
            Итого доставка: {SHIPPING_PRICES[value]} руб.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='subtitle2' component='p'>
            Итого к оплате: {SHIPPING_PRICES[value] + totalPrice} руб.
          </Typography>
        </Grid>
      </div>
    </>
  )
}

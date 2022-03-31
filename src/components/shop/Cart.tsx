import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import { CartItemType } from '../../types/Cart'
import { CartItem } from './CartItem'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { addShippingPrice } from '../../redux/actions/shippingAction'
import { SHIPPING_PRICES } from '../../constants'

type Props = {
  cartItems: CartItemType[]
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      width: '250px',
      padding: '10px',
    },
    label: {
      fontSize: 'x-small',
    },
    btn: {
      marginBottom: '5px',
    },
  })
)

export const Cart: React.FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  const classes = useStyles()
  const router = useRouter()
  const dispatch = useDispatch()

  const [value, setValue] = useState('courier')

  useEffect(() => {
    dispatch(addShippingPrice(SHIPPING_PRICES[value]))
    localStorage.setItem('shippingPrice', SHIPPING_PRICES[value])
  }, [value])

  const calculateTotal = (items: CartItemType[]) =>
    items.reduce(
      (ack: number, item) => ack + item.amountOfGoods * item.priceOfGoods,
      0
    )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  const handleClearCart = () => {
    window.localStorage.removeItem('cart')
    router.reload()
  }

  const handleCheckout = (e: any) => {
    e.preventDefault()
    router.push('/checkout')
  }

  return (
    <div className={classes.root}>
      <h2>Ваша корзина</h2>
      {cartItems.length === 0 ? <p>Корзина пуста</p> : null}
      {cartItems.map((item: CartItemType) => (
        <CartItem
          key={item._id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      {!!cartItems.length && (
        <>
          <h2>Всего: {calculateTotal(cartItems).toFixed(2)} руб.</h2>
          <div>
            <Typography variant='subtitle2'>Способ доставки</Typography>
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
                    classes={{
                      label: classes.label,
                    }}
                    value='courier'
                    control={<Radio />}
                    label='Курьер (гор.Москва 400 руб.)'
                  />
                  <FormControlLabel
                    classes={{
                      label: classes.label,
                    }}
                    value='mail'
                    control={<Radio />}
                    label='Заказное письмо 1 класса (Почта России) по России 200 руб.'
                  />
                  <FormControlLabel
                    classes={{
                      label: classes.label,
                    }}
                    value='mailOverseas'
                    control={<Radio />}
                    label='Регистрируемое письмо Почтой России за рубеж 500 руб.'
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='subtitle2'>
                Итого к оплате с учетом доставки:
                {SHIPPING_PRICES[value] +
                  +calculateTotal(cartItems).toFixed(2)}{' '}
                руб.
              </Typography>
            </Grid>
          </div>
          <Button
            className={classes.btn}
            variant='contained'
            color='primary'
            onClick={handleCheckout}
            fullWidth
          >
            Оформить
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={handleClearCart}
            fullWidth
          >
            Очистить
          </Button>
        </>
      )}
    </div>
  )
}

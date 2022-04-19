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
import { createStyles, makeStyles } from '@mui/styles'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ROUBLE, SHIPPING_PRICES } from '../../constants'
import { addShippingPrice } from '../../redux/actions/shippingAction'
import { CartItemType } from '../../types/Cart'
import { CartItem } from './CartItem'

type TProps = {
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

export const Cart: React.FC<TProps> = ({
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

  const handleCheckout = () => {
    router.push('/checkout')
  }

  return (
    <div className={classes.root}>
      <h3 style={{ textAlign: 'center', borderBottom: '1px solid lightblue' }}>
        Ваша корзина
      </h3>

      {cartItems.length === 0 ? (
        <h4 style={{ textAlign: 'center' }}>Корзина пуста</h4>
      ) : null}

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
          <h3>
            Всего: {calculateTotal(cartItems).toFixed(0)} {ROUBLE}
          </h3>
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
                {ROUBLE}
              </Typography>
            </Grid>
          </div>
          <Button
            className={classes.btn}
            variant='contained'
            color='primary'
            onClick={handleCheckout}
            fullWidth
            size='small'
          >
            Оформить
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={handleClearCart}
            fullWidth
            size='small'
          >
            Очистить
          </Button>
        </>
      )}
    </div>
  )
}

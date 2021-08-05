import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import { CartEmpty } from '../components/CartEmpty'
import { CartTable } from '../components/CartTable'
import { initItems } from '../redux/actions/cartActions'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    marginTop: 65,
    marginBottom: 10,
    padding: 5,
  },
  button: {
    borderRadius: 13,
    boxShadow: '0 3px 2px 2px',
    padding: '0 10px',
    margin: 10,
  },
  buttonsDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

export default function Cart() {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initItems())
  }, [dispatch])

  let isCartEmpty

  if (typeof window !== 'undefined') {
    isCartEmpty = !window.localStorage.getItem('cart')
  }

  const handleClearCart = () => {
    window.localStorage.removeItem('cart')
  }

  const handleClick = () => console.log('Оформление заказа')
  const handleGoShopping = () => console.log('Вернутся в магазин')

  return (
    <>
      {isCartEmpty && <CartEmpty />}
      {isCartEmpty || <CartTable />}
      {isCartEmpty || (
        <div className={classes.buttonsDiv}>
          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            onClick={() => handleClearCart()}
          >
            Очистить корзину
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            onClick={handleClick}
          >
            Оформить
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            onClick={() => handleGoShopping()}
          >
            Продожить покупки
          </Button>
        </div>
      )}
    </>
  )
}

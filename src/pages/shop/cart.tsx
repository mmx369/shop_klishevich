import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import { CartEmpty } from '../../components/shop/CartEmpty'
import { CartTable } from '../../components/shop/CartTable'
import { initItems } from '../../redux/actions/cartActions'
import { makeStyles } from '@mui/styles'
import { useRouter } from 'next/router'
import Layout from '../../components/layout/layout'

const useStyles = makeStyles({
  root: {
    // margin: 10,
  },
  button: {
    // margin: 5,
  },
})

export default function Cart() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const router = useRouter()

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

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push('/checkout')
  }

  const handleGoShopping = () => {
    router.back()
  }

  return (
    <>
      <Layout title='Корзина'>
        <div>{isCartEmpty && <CartEmpty />}</div>
        <div> {isCartEmpty || <CartTable />}</div>

        {isCartEmpty || (
          <div>
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              onClick={() => handleClearCart()}
              fullWidth
            >
              Очистить корзину
            </Button>
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              onClick={handleClick}
              fullWidth
            >
              Оформить
            </Button>
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              fullWidth
              onClick={() => handleGoShopping()}
            >
              Продожить покупки
            </Button>
          </div>
        )}
      </Layout>
    </>
  )
}

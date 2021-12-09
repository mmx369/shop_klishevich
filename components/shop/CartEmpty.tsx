import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'

const useStyles = makeStyles({
  button: {
    padding: '0 10px',
    margin: 10,
  },
})

export const CartEmpty = () => {
  const classes = useStyles()
  const router = useRouter()

  const handleGoShopping = () => {
    router.replace('/')
  }

  return (
    <>
      <h1>Ваша корзина пуста</h1>
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        onClick={() => handleGoShopping()}
      >
        продолжить покупки
      </Button>
    </>
  )
}

import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'

const useStyles = makeStyles({
  button: {
    borderRadius: 13,
    boxShadow: '0 3px 2px 2px',
    padding: '0 10px',
    margin: 10,
  },
})

export const CartEmpty = () => {
  const classes = useStyles()
  const router = useRouter()

  const handleGoShopping = () => {
    router.push('/')
  }

  return (
    <>
      <h1>Ваша корзина пуста</h1>
      <Button
        className={classes.button}
        variant="outlined"
        color="secondary"
        onClick={() => handleGoShopping()}
      >
        продолжить покупки
      </Button>
    </>
  )
}

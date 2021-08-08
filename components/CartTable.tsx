import React from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from '../redux/reducers'

export const CartTable = () => {
  const cart = useSelector((state: IRootState) => state.cart) || []

  return <pre>{JSON.stringify(cart, null, 4)}</pre>
}

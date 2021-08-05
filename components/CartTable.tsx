import React from 'react'
import { useSelector } from 'react-redux'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

export const CartTable = () => {
  //@ts-ignore
  const cart = useSelector((state) => state.cart) || []

  return (
    <>
      <pre>{JSON.stringify(cart, null, 4)}</pre>
    </>
  )
}

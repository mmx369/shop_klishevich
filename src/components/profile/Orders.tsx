import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useRouter } from 'next/router'
import React from 'react'
import { translate } from '../../lib/translate'
import { IListOfOrders } from '../../pages/admin/orders'

const columns = [
  { id: 'date', label: 'Дата заказа', minWidth: 170 },
  {
    id: 'totalPrice',
    label: 'Сумма заказа',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'status',
    label: 'Статус заказа',
    minWidth: 170,
    align: 'right',
  },
]

const useStyles = makeStyles({
  rows: {
    cursor: 'pointer',
  },
})

type TProps = {
  orderList: IListOfOrders[]
}

export default function Orders({ orderList }: TProps) {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const router = useRouter()

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleOrder = (id: string) => {
    router.push(`profile/${id}`)
  }

  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align as 'right'}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {orderList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order) => {
                return (
                  <TableRow
                    className={classes.rows}
                    hover
                    role='checkbox'
                    tabIndex={-1}
                    key={order._id}
                    onClick={() => handleOrder(order._id)}
                  >
                    {columns.map((column) => {
                      const value =
                        column.id === 'date'
                          ? new Date(order[column.id]).toLocaleDateString()
                          : column.id === 'status'
                          ? translate(order.status as string)
                          : order[column.id as keyof IListOfOrders]
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align as 'right'}
                        >
                          {value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={orderList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

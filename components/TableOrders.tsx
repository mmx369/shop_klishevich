import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import { useRouter } from 'next/router'

const columns = [
  { id: 'date', label: 'Дата заказа', minWidth: 170 },
  { id: 'firstName', label: 'Клиент', minWidth: 100 },
  {
    id: 'city',
    label: 'Город',
    minWidth: 170,
    align: 'right',
  },
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
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
})

export default function TableOrders({ listOfOrders }) {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const router = useRouter()

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleOrder = (event, id) => {
    event.preventDefault()
    router.push(`orders/${id}`)
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  //@ts-ignore
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {listOfOrders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={order._id}
                    onClick={() => handleOrder(event, order._id)}
                  >
                    {columns.map((column) => {
                      const value =
                        column.id === 'date'
                          ? new Date(order[column.id]).toLocaleDateString()
                          : column.id === 'firstName'
                          ? order[column.id] + ' ' + order.secondName
                          : order[column.id]
                      return (
                        //@ts-ignore
                        <TableCell key={column.id} align={column.align}>
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
        component="div"
        count={listOfOrders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import React from 'react'
import Layout from '../../../components/layout/layout'
import { ModalSelectStatus } from '../../../components/ModalSelectStatus'
import { ROUBLE } from '../../../constants'
import NewOrder from '../../../models/newOrder'
import { IProductOrders } from '../../../types/order'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '50px',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })
)

export type TProps = {
  orderJSON: string
}

export default function ItemsDetails({ orderJSON }: TProps) {
  const classes = useStyles()
  const order: IProductOrders = JSON.parse(orderJSON)

  const newDate = new Date(order.date).toLocaleDateString()

  const currentStatus = (status: string) => {
    if (status === 'open') return 'Заказ открыт'
    if (status === 'paid') return 'Заказ оплачен'
    if (status === 'shipped') return 'Заказ отправлен'
    if (status === 'received') return 'Заказ получен'
    if (status === 'closed') return 'Заказ закрыт'
  }

  return (
    <Layout title='Администрирование | Просмотр заказа'>
      <div className={classes.root}>
        <div>
          <Typography variant='h6'>Дата создания: {newDate}</Typography>
          <Typography variant='h6'>
            Текущий статус:{` ${currentStatus(order.status)}`}
          </Typography>
          <ModalSelectStatus currStatus={order.status} currId={order._id} />
          <Typography variant='h6'>Почтовый адрес:</Typography>
          <div style={{ border: 'solid 1px', padding: '5px' }}>
            <Typography variant='body2'>
              {`${order.secondName} ${order.firstName} ${
                order.fatherName ? order.fatherName : ''
              }`}
            </Typography>
            <Typography variant='body2'>{`${order.address}`}</Typography>
            <Typography variant='body2'>{`${order.region ? order.region : ''} ${
              order.city ? order.city : ''
            }`}</Typography>
            <Typography variant='body2'>{`${order.zip}`}</Typography>
          </div>
        </div>

        <div>
          <Typography variant='h6'>Заказ:</Typography>

          <TableContainer component={Paper}>
            <Table size='small' aria-label='a dense table'>
              <TableHead>
                <TableRow>
                  <TableCell>Товар</TableCell>
                  <TableCell align='right'>Количество</TableCell>
                  <TableCell align='right'>Цена</TableCell>
                  <TableCell align='right'>Стоимость</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.order.map((el) => (
                  <TableRow key={el._id}>
                    <TableCell component='th' scope='row'>
                      {el.nameOfGoods}
                    </TableCell>
                    <TableCell align='right'>{el.amountOfGoods}</TableCell>
                    <TableCell align='right'>{el.priceOfGoods}</TableCell>
                    <TableCell align='right'>
                      {el.priceOfGoods * el.amountOfGoods}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant='subtitle2'>
            Итоговая стоимость: {order.totalPrice} {ROUBLE}
          </Typography>
          <Typography variant='subtitle2'>
            Cтоимость доставки: {order.shippingPrice} {ROUBLE}
          </Typography>
          <Typography variant='subtitle2'>
            Итого к оплате:{' '}
            {order.shippingPrice!
              ? order.shippingPrice + order.totalPrice
              : 'Не выбрана стоимость доставки'}{' '}
            {ROUBLE}
          </Typography>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const id = ctx.params!.id
  const data = await NewOrder.findById(id).select('-__v')
  const orderJSON = JSON.stringify(data)
  return { props: { orderJSON } }
}

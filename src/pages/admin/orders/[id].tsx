import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { GetServerSideProps } from 'next'
import Layout from '../../../components/layout/layout'
import NewOrder from '../../../models/newOrder'
import DialogSelect from '../../../components/DialogSelect'

export interface ItemsDetailsProps {
  order: string
}

export default function ItemsDetails({ order }: ItemsDetailsProps) {
  const orderToJSON = JSON.parse(order)
  const newDate = new Date(orderToJSON.date).toLocaleDateString()

  const currentStatus = (status: string) => {
    if (status === 'open') return 'Заказ открыт'
    if (status === 'paid') return 'Заказ оплачен'
    if (status === 'shipped') return 'Заказ отправлен'
    if (status === 'received') return 'Заказ получен'
    if (status === 'closed') return 'Заказ закрыт'
  }

  return (
    <div>
      <Layout title=''>
        <div>
          <Typography variant='h6'>Дата создания:{newDate}</Typography>
          <Typography variant='h6'>
            Текущий статус:{` ${currentStatus(orderToJSON.status)}`}
          </Typography>
          <DialogSelect
            currStatus={orderToJSON.status}
            currId={orderToJSON._id}
          />
          <Typography variant='h6'>Почтовый адрес:</Typography>
          <div style={{ border: 'solid 1px', padding: '5px' }}>
            <Typography variant='body2'>
              {`${orderToJSON.secondName} ${orderToJSON.firstName} ${
                orderToJSON.fatherName ? orderToJSON.fatherName : ''
              }`}
            </Typography>
            <Typography variant='body2'>{`${orderToJSON.address}`}</Typography>
            <Typography variant='body2'>{`${
              orderToJSON.region ? orderToJSON.region : ''
            } ${orderToJSON.city ? orderToJSON.city : ''}`}</Typography>
            <Typography variant='body2'>{`${orderToJSON.zip}`}</Typography>
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
                {orderToJSON.order.map((el: any) => (
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
            Итоговая стоимость: {orderToJSON.totalPrice} рублей
          </Typography>
        </div>
      </Layout>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const id = ctx.params.id as string
  const data = await NewOrder.findById(id).exec()
  const order = JSON.stringify(data)

  return { props: { order } }
}

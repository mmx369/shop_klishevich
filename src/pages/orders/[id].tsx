import { Button, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import axios from 'axios'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/layout/layout'
import NewOrder from '../../models/newOrder'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '50px',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    btn: {
      margin: '0 auto',
      display: 'block',
    },
  })
)

type TProps = {
  orderNumber: string
  paymentAmount: number
}

export default function OrderFinished({ orderNumber, paymentAmount }: TProps) {
  const classes = useStyles()
  const router = useRouter()

  const handleCreatePayment = async (
    paymentAmount: number,
    orderId: string
  ) => {
    try {
      const response = await axios.post(
        `${process.env.RESTURL}/api/createpayment`,
        { paymentAmount, orderId }
      )
      if (typeof window !== 'undefined') {
        router.push(response.data.confirmation.confirmation_url)
      }
    } catch (err) {
      throw new Error(`Something went wrong try later`)
    }
  }

  return (
    <Layout title='Администрирование | Просмотр заказа'>
      <div className={classes.root} data-testid='orderSuccessPage'>
        <Typography variant='subtitle1'>
          Ваш заказ успешно оформлен. Вы можете оплатить заказ сейчас банковской
          картой. Если Вы хотите оплатить иным способом, то дождитесь когда с
          Вами свяжется наш менеджер для уточнения деталей оплаты и доставки.
        </Typography>
        <Typography variant='subtitle1'>
          Номер вашего заказа:{' '}
          <span style={{ color: 'Highlight' }}>{orderNumber}</span>
        </Typography>
        <Typography variant='subtitle1'>
          Если возникли какие-то вопросы касательно Вашего заказа вы можете
          позвонить по телефону:{' '}
          <span style={{ color: 'Highlight' }}>+7-968-429-62-04</span>
        </Typography>
        <Typography variant='subtitle1'>
          Текущий статус Вашего заказа можно посмотреть в{' '}
          <Link href='/profile'>
            <a>
              <strong>личном кабинете</strong>.
            </a>
          </Link>
        </Typography>
      </div>
      <Button
        className={classes.btn}
        variant='outlined'
        onClick={() => handleCreatePayment(paymentAmount, orderNumber)}
      >
        Оплатить банковской картой
      </Button>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const id = ctx.params!.id
  const data = await NewOrder.findById(id).select('-__v')
  if (!data?.totalPrice || !data?.shippingPrice) {
    throw new Error('Что-то пошло не так попробуйте позже')
  }
  const paymentAmount = data?.totalPrice + data?.shippingPrice

  const orderNumber = id?.slice(-6)
  return { props: { orderNumber, paymentAmount } }
}

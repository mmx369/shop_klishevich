import { createStyles, makeStyles } from '@mui/styles'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import React from 'react'
import Layout from '../../components/layout/layout'

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

type TProps = {
  orderNumber: string
}

export default function OrderFinished({ orderNumber }: TProps) {
  const classes = useStyles()

  return (
    <Layout title='Администрирование | Просмотр заказа'>
      <div className={classes.root}>
        <h3>
          Ваш заказ успешно оформлен, в ближайшее время с вами свяжется менеджер
          для уточнения деталей оплаты и доставки.
        </h3>
        <h4>
          Номер вашего заказа:{' '}
          <span style={{ color: 'Highlight' }}>{orderNumber}</span>
        </h4>
        <h4>
          Если возникли какие-то вопросы касательно Вашего заказа вы можете
          позвонить по телефону +7-968-429-62-04
        </h4>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const id = ctx.params!.id
  const orderNumber = id?.slice(-6)
  return { props: { orderNumber } }
}

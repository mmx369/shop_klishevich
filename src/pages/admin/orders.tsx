import { createStyles, makeStyles } from '@mui/styles'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/client'
import React from 'react'
import Layout from '../../components/layout/layout'
import TableOrders from '../../components/TableOrders'
import { serializeData } from '../../lib/serialize'
import NewOrder from '../../models/newOrder'
import { ERole } from '../../types/ERole'

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

export interface IListOfOrders {
  email: string
  status?: string
  firstName: string
  secondName: string
  fatherName?: string
  zip: string
  country: string
  region?: string
  city: string
  address: string
  phone: string
  comments?: string
  totalPrice: number
  _id: string
  date: string
  order: string
}

export type TProps = {
  orderList: IListOfOrders[]
}

export default function Orders({ orderList }: TProps) {
  const classes = useStyles()
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return null

  if (!session) {
    return (
      <Layout title='Администрирование'>
        <h1>Вы должны авторизоваться</h1>;
      </Layout>
    )
  }
  if (session.role !== ERole.Admin) {
    return (
      <Layout title='Администрирование'>
        <h1>Вы должны быть администратором</h1>;
      </Layout>
    )
  }
  return (
    <Layout title='Администрирование | Работа с заказами'>
      <div className={classes.root}>
        <TableOrders orderList={orderList} />
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await NewOrder.find({})
      .where('status')
      .in(['open', 'paid', 'shipped', 'received'])
      .select('-__v')

    const dataSerialized = serializeData(data)

    return {
      props: { orderList: dataSerialized },
    }
  } catch (err) {
    console.error(err)
    return {
      notFound: true,
    }
  }
}

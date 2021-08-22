import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/client'
import React from 'react'
import Layout from '../../components/layout'
import TableOrders from '../../components/TableOrders'
import NewOrder from '../../models/newOrder'
import { ERole } from '../../types/ERole'

export interface IOrders {
  res: IListOfOrders[] | undefined
}

export interface IListOfOrders {
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

export default function Orders({ res }: IOrders) {
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return null
  if (!session) {
    return (
      <Layout title="Admin profile">
        <h1>Вы должны авторизоваться</h1>;
      </Layout>
    )
  }
  if (session.role !== ERole.Admin) {
    return (
      <Layout title="Admin profile">
        <h1>Вы должны быть администратором</h1>;
      </Layout>
    )
  }
  return (
    <Layout title="Администрирование | Работа с заказами">
      <TableOrders listOfOrders={res} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await NewOrder.find({})

    const resSerialized = data.map(
      //@ts-ignore
      ({ _doc: { _id, date, __v, order, ...rest } }) => {
        rest._id = _id.toString()
        rest.date = date.toString()
        rest.order = order.toString()
        return rest
      }
    )

    return {
      props: { res: resSerialized }, // will be passed to the page component as props
    }
  } catch (err) {
    console.error(err)
    return {
      notFound: true,
    }
  }
}

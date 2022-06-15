import { createStyles, makeStyles } from '@mui/styles'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import React from 'react'
import Layout from '../../components/layout/layout'
import Orders from '../../components/profile/Orders'
import { dbApi } from '../../db/dbApi'
import { serializeData } from '../../lib/serialize'
import { IListOfOrders } from '../admin/orders'

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
  userOrders: IListOfOrders[]
}

export default function ProfilePage({ userOrders }: TProps) {
  const classes = useStyles()

  if (userOrders.length === 0) {
    return (
      <>
        <Layout title='Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет | Личный кабинет'>
          <div className={classes.root}>
            <h2 style={{ textAlign: 'center' }}>Личный кабинет</h2>
            <p style={{ textAlign: 'center' }}>
              У Вас пока нет оформленных заказов
            </p>
          </div>
        </Layout>
      </>
    )
  }

  return (
    <>
      <Layout title='Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет | Личный кабинет'>
        <div className={classes.root}>
          <h2 style={{ textAlign: 'center' }}>Личный кабинет</h2>
          <h5>{`Статус Ваших заказов: ${userOrders[0]!.email}`}</h5>
          <Orders orderList={userOrders} />
        </div>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req } = ctx
  const session = await getSession({ req })
  if (!session) return { redirect: { destination: '/', permanent: false } }

  const { user } = (await getSession({ req })) as { user: { email: string } }

  const data = await dbApi.getOrdersByEmail(user.email)

  const userOrders = serializeData(data)

  return {
    props: { userOrders }, // will be passed to the page component as props
  }
}

import { createStyles, makeStyles, Typography } from '@material-ui/core'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/client'
import React from 'react'
import Layout from '../../components/layout/layout'
import { ERole } from '../../types/ERole'
import { getSession } from 'next-auth/client'
import NewOrder from '../../models/newOrder'

const useStyles = makeStyles(() =>
  createStyles({
    main: {
      margin: '15px',
    },
    footer: {
      margin: '15px',
      textAlign: 'center',
    },
    link: {
      textDecoration: 'none',
    },
  })
)

type TProps = {}

export default function ClientPage(props: TProps) {
  const classes = useStyles()
  const [session, loading] = useSession()

  console.log(111, props)

  if (typeof window !== 'undefined' && loading) return null
  if (!session) {
    return (
      <Layout title='Личный кабинет'>
        <h1>Вы должны авторизоваться</h1>;
      </Layout>
    )
  }
  if (session.role !== ERole.Client) {
    return (
      <Layout title='Личный кабинет'>
        <h1>Вы должны авторизоваться</h1>;
      </Layout>
    )
  }
  return (
    <Layout title='Личный кабинет'>
      <div>Личный кабинет</div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const session = await getSession({ req })
    const userEmail = session.user.email
    const data = await NewOrder.find({ email: userEmail })

    console.log(111, data)

    if (!data) {
      return {
        notFound: true,
      }
    }
    return {
      props: { data },
    }
  } catch (e) {
    console.error(e)
  }
}

import { useSession } from 'next-auth/client'
import React from 'react'
import Layout from '../../components/layout/layout'
import { ERole } from '../../types/ERole'
import { getSession } from 'next-auth/client'
import NewOrder from '../../models/newOrder'

export default function ClientPage() {
  const [session, loading] = useSession()

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

export const getServerSideProps: any = async ({ req }: any) => {
  try {
    const session: any = await getSession({ req })
    const userEmail = session.user.email
    const data = await NewOrder.find({ email: userEmail as string })

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

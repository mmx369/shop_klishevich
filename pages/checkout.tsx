import { useSession } from 'next-auth/client'
import React from 'react'
import { CheckoutOrderForm } from '../components/CheckoutOrderForm'
import Layout from '../components/layout/layout'

export default function Checkout() {
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return null
  if (!session) {
    return (
      <>
        <Layout title='Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет'>
          <h1>Вам неоходимо авторизоваться</h1>;
        </Layout>
      </>
    )
  }

  return (
    <Layout title='Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет'>
      <div>
        <CheckoutOrderForm />
      </div>
    </Layout>
  )
}

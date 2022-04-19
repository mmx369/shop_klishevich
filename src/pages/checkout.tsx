import { createStyles, makeStyles } from '@mui/styles'
import { useSession } from 'next-auth/client'
import { CheckoutOrderForm } from '../components/CheckoutOrderForm'
import Layout from '../components/layout/layout'

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

export default function Checkout() {
  const classes = useStyles()
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return null

  if (!session) {
    return (
      <>
        <Layout title='Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет'>
          <div className={classes.root}>
            <h3 style={{ textAlign: 'center' }}>
              Для оформления заказа вам неоходимо авторизоваться.
            </h3>
          </div>
        </Layout>
      </>
    )
  }

  return (
    <Layout title='Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет'>
      <div className={classes.root}>
        <CheckoutOrderForm />
      </div>
    </Layout>
  )
}

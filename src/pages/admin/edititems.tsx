import { createStyles, makeStyles } from '@mui/styles'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/client'
import Layout from '../../components/layout/layout'
import ProductList from '../../components/ProductList'
import { serializeData } from '../../lib/serialize'
import ShopGoods from '../../models/shopGoods'
import { ERole } from '../../types/ERole'
import { IProduct } from '../../types/Product'

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
  productList: IProduct[]
}

export default function EditItems({ productList }: TProps) {
  const classes = useStyles()
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return null

  if (!session) {
    return (
      <Layout title='Администрирование'>
        <h1>Вы должны авторизоваться</h1>
      </Layout>
    )
  }
  if (session.role !== ERole.Admin) {
    return (
      <Layout title='Администрирование'>
        <h1>Вы должны быть администратором</h1>
      </Layout>
    )
  }

  return (
    <Layout title='Администрирование | Работа с заказами'>
      <div className={classes.root}>
        <ProductList productList={productList} />
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await ShopGoods.find({}).select('-date -__v')
    const productList = serializeData(data)

    return {
      props: { productList },
    }
  } catch (err) {
    console.error(err)
    return {
      notFound: true,
    }
  }
}

import { createStyles, makeStyles } from '@mui/styles'
import Layout from '../../components/layout/layout'
// import { getSession } from "next-auth/react"

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

export default function ProfilePage() {
  const classes = useStyles()
  return (
    <>
      <Layout title='Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет | Оплата и доставка'>
        <div className={classes.root}>
          <h1>Личный кабинет</h1>
        </div>
      </Layout>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const session = await getSession({ req })
//     return {
//       props: 'test',
//     }
//   } catch (err) {
//     console.error(err)
//     return {
//       notFound: true,
//     }
//   }
// }

import { createStyles, makeStyles } from '@mui/styles'
import { useSession } from 'next-auth/client'
import { AddNewItemForm } from '../../components/AddNewItemForm'
import Layout from '../../components/layout/layout'
import { ERole } from '../../types/ERole'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '50px',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
    },
  })
)

export default function AddNewItem() {
  const classes = useStyles()
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return null

  if (!session) {
    return (
      <>
        <Layout title='Администрирование'>
          <h1>Вы должны авторизоваться.</h1>
        </Layout>
      </>
    )
  }
  if (session.role !== ERole.Admin) {
    return (
      <Layout title='Администрирование'>
        <h1>Вы должны иметь права администратора.</h1>
      </Layout>
    )
  }
  return (
    <Layout title='Администрирование | Добавить новый товар'>
      <div className={classes.root}>
        <AddNewItemForm />
      </div>
    </Layout>
  )
}

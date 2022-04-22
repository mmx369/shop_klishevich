import { Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { useSession } from 'next-auth/client'
import Link from 'next/link'
import Layout from '../../components/layout/layout'
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

export default function Homepage() {
  const classes = useStyles()
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return null

  if (!session) {
    return (
      <Layout title='Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет | Администрирование'>
        <h1>Вы должны авторизоваться.</h1>
      </Layout>
    )
  }
  if (session.role !== ERole.Admin) {
    return (
      <Layout title='Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет | Администрирование'>
        <h1>Вы должны иметь права администратора.</h1>
      </Layout>
    )
  }
  return (
    <Layout title='Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет | Администрирование'>
      <div className={classes.root}>
        <Link href={'/admin/userlist'}>
          <a>
            <Typography color='inherit'>Редактировать пользователей</Typography>
          </a>
        </Link>
        <Link href='/admin/addnewitem'>
          <a>
            <Typography color='inherit'>
              Добавить новый товар в магазин
            </Typography>
          </a>
        </Link>
        <Link href='/admin/edititems'>
          <a>
            <Typography color='inherit'>Редактировать ассортимент</Typography>
          </a>
        </Link>
        <Link href='/admin/addnewfaq'>
          <a>
            <Typography color='inherit'>
              Редактировать страницу вопросов и ответов
            </Typography>
          </a>
        </Link>
        <Link href='/admin/orders'>
          <a>
            <Typography color='inherit'>Работа с заказами</Typography>
          </a>
        </Link>
      </div>
    </Layout>
  )
}

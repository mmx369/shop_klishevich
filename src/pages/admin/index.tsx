import { Typography } from '@mui/material'
import { useSession } from 'next-auth/client'
import Link from 'next/link'
import Layout from '../../components/layout/layout'
import { ERole } from '../../types/ERole'

export default function Homepage() {
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return null
  if (!session) {
    return (
      <Layout title='Admin profile'>
        <h1>You must sign in</h1>;
      </Layout>
    )
  }
  if (session.role !== ERole.Admin) {
    return (
      <Layout title='Admin profile'>
        <h1>You must be an admin to see this page</h1>;
      </Layout>
    )
  }
  return (
    <Layout title='Администрирование'>
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
    </Layout>
  )
}

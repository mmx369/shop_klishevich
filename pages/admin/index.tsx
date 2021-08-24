import { createStyles, makeStyles, Typography } from '@material-ui/core'
import { useSession } from 'next-auth/client'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/layout'
import { ERole } from '../../types/ERole'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CustomToast = ({ closeToast }: any) => {
  return (
    <div>
      Something!!!!
      <button onClick={closeToast}>close</button>
    </div>
  )
}

// toast.configure()

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

export default function Homepage(props: TProps) {
  const classes = useStyles()
  const [session, loading] = useSession()

  const notify = () => {
    toast('Basic Notification', {
      position: toast.POSITION.TOP_LEFT,
    }),
      toast.success('Succes Notification', {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 8000,
      }),
      toast.warn(<CustomToast />, {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
  }

  if (typeof window !== 'undefined' && loading) return null
  if (!session) {
    return (
      <Layout title="Admin profile">
        <h1>You must sign in</h1>;
      </Layout>
    )
  }
  if (session.role !== ERole.Admin) {
    return (
      <Layout title="Admin profile">
        <h1>You must be an admin to see this page</h1>;
      </Layout>
    )
  }
  return (
    <Layout title="Администрирование">
      <Link href={'/admin/userlist'}>
        <a className={classes.link}>
          <Typography color="inherit">Редактировать пользователей</Typography>
        </a>
      </Link>
      <Link href="/admin/addnewitem">
        <a className={classes.link}>
          <Typography color="inherit">
            Добавить новый товар в магазин
          </Typography>
        </a>
      </Link>
      <Link href="/admin/addnewfaq">
        <a className={classes.link}>
          <Typography color="inherit">
            Редактировать страницу вопросов и ответов
          </Typography>
        </a>
      </Link>
      <Link href="/admin/orders">
        <a className={classes.link}>
          <Typography color="inherit">Работа с заказами</Typography>
        </a>
      </Link>
      <button onClick={notify}>Notify</button>
    </Layout>
  )
}

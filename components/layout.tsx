import React from 'react'
import Head from 'next/head'
import { Nav } from './Nav'
import {
  Breadcrumbs,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../redux/reducers'
import { ELoggedIn } from '../types/ELoggedIn'
import { getSession } from 'next-auth/client'
import { updateIsLoggedInAC, updateUserAC } from '../redux/actions/appActions'
import { ERole } from '../types/ERole'
import { Notification } from './Notification'
import { initItems } from '../redux/actions/cartActions'
import BottomAppBar from './AppBarBottom'

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

type TProps = {
  children: React.ReactNode
  title: string
}

export default function Layout({ children, title }: TProps) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const currentUser = useSelector((state: IRootState) => state.app.currentUser)
  const currentEmail = useSelector(
    (state: IRootState) => state.app.currentEmail
  )
  const currentId = useSelector((state: IRootState) => state.app.currentId)

  const currentRole = useSelector((state: IRootState) => state.app.currentRole)
  const isLoggedIn = useSelector((state: IRootState) => state.app.isLoggedIn)

  React.useEffect(() => {
    if (isLoggedIn === ELoggedIn.Unknown) {
      ;(async () => {
        const session = await getSession()
        if (session) {
          dispatch(updateIsLoggedInAC(ELoggedIn.True))
          dispatch(
            updateUserAC(
              session.user.name,
              session.user.email,
              session.databaseId as string,
              session.role as string
            )
          )
        } else {
          dispatch(updateIsLoggedInAC(ELoggedIn.False))
          dispatch(updateUserAC(undefined, undefined, undefined, undefined))
        }
      })()
    }
  }, [])

  React.useEffect(() => {
    dispatch(initItems())
  }, [dispatch])

  const isCartEmpty = useSelector((state: IRootState) => state.cart) || []

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Nav
          currentUser={currentUser}
          currentEmail={currentEmail}
          currentId={currentId}
          currentRole={currentRole}
          isLoggedIn={isLoggedIn}
          isCartEmpty={isCartEmpty}
        />
      </header>
      <main className={classes.main}>
        <Notification />

        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/">
            <a className={classes.link}>
              <Typography color="primary">Главная</Typography>
            </a>
          </Link>
          <Link href="/paymentandshipping">
            <a className={classes.link}>
              <Typography color="primary">Оплата и доставка</Typography>
            </a>
          </Link>
          <Link href="/faq">
            <a className={classes.link}>
              <Typography color="primary">Вопросы</Typography>
            </a>
          </Link>
          {currentRole === ERole.Admin && (
            <Link href="/admin">
              <a className={classes.link}>
                <Typography color="inherit">Администрирование</Typography>
              </a>
            </Link>
          )}
        </Breadcrumbs>
        <div style={{ flexGrow: 1 }}>{children}</div>
      </main>
      <footer className={classes.footer}>
        <BottomAppBar />
        <Link href="/">
          <a className={classes.link}>
            <b>Интернет-магазин. Нумизматика и бонистика</b>
          </a>
        </Link>
      </footer>
    </div>
  )
}

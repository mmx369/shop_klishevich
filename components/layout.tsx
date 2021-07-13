import React from 'react'
import Head from 'next/head'
import { Nav } from './Nav'
import { createStyles, makeStyles, Typography } from '@material-ui/core'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../redux/reducers'
import { ELoggedIn } from '../types/ELoggedIn'
import { getSession } from 'next-auth/client'
import { updateIsLoggedInAC, updateUserAC } from '../redux/actions/appActions'
import { ERole } from '../types/ERole'
import { Notification } from './Notification'

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
        console.log({ session })
        if (session) {
          console.log(
            'additional info from the server: ',
            session.someInfo,
            session
          )
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
          console.log('NO session!!!', session)
          dispatch(updateIsLoggedInAC(ELoggedIn.False))
          dispatch(updateUserAC(undefined, undefined, undefined, undefined))
        }
      })()
    }
  }, [])

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
        />
      </header>
      <main className={classes.main}>
        <Notification />
        <Link href="/">
          <a className={classes.link}>
            <Typography color="inherit">Home</Typography>
          </a>
        </Link>
        <Link href="/test_redux">
          <a className={classes.link}>
            <Typography color="inherit">Test redux page</Typography>
          </a>
        </Link>
        <Link href="/test_database">
          <a className={classes.link}>
            <Typography color="inherit">Test database</Typography>
          </a>
        </Link>
        <Link href="/faq">
          <a className={classes.link}>
            <Typography color="inherit">FAQ</Typography>
          </a>
        </Link>

        {currentRole === ERole.Admin && (
          <Link href="/admin">
            <a className={classes.link}>
              <Typography color="inherit">Admin profile</Typography>
            </a>
          </Link>
        )}
        <h1>{title}</h1>
        <div style={{ flexGrow: 1 }}>{children}</div>
      </main>
      <footer className={classes.footer}>
        <Link href="/">
          <a className={classes.link}>
            <b>Paper Money Shop</b>
          </a>
        </Link>
      </footer>
    </div>
  )
}

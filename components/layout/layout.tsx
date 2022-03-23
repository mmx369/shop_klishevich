import Head from 'next/head'
import { useEffect } from 'react'
import { Container, createStyles, makeStyles } from '@material-ui/core'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { Nav } from './nav'
import { IRootState } from '../../redux/reducers'
import { ELoggedIn } from '../../types/ELoggedIn'
import { getSession, useSession } from 'next-auth/client'
import {
  updateIsLoggedInAC,
  updateUserAC,
} from '../../redux/actions/appActions'
import { initItems } from '../../redux/actions/cartActions'
import BottomAppBar from './bottomAppBar'
import axios from 'axios'

const useStyles = makeStyles(() =>
  createStyles({
    main: {
      marginTop: '55px',
    },
    footer: {
      marginTop: '55px',
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
  const currentEmail = useSelector(
    (state: IRootState) => state.app.currentEmail
  )
  const currentRole = useSelector((state: IRootState) => state.app.currentRole)
  const isLoggedIn = useSelector((state: IRootState) => state.app.isLoggedIn)

  useEffect(() => {
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

  useEffect(() => {
    // ;(async () => {
    //   const session = await getSession()
    //   if (session) {
    //     console.log(111, session)
    //     const response = await axios.get(
    //       `${process.env.RESTURL}/api/getcurrentcart`
    //     )
    //     console.log(222, response.data)
    //     if (response.data.length === 0) {
    //       console.log('No data!')
    //       const items = JSON.parse(localStorage.getItem('cart'))
    //       console.log(333, items)
    //       const newCart = items.map((item: any) => {
    //         return { productId: item._id, quantity: item.amountOfGoods }
    //       })
    //       console.log(444, newCart)
    //     }
    //   } else {

    //     console.log(222, session)
    //   }
    // })()
    dispatch(initItems())
  }, [dispatch])

  const isCartEmpty = useSelector((state: IRootState) => state.cart) || []

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Nav
          currentEmail={currentEmail}
          currentRole={currentRole}
          isLoggedIn={isLoggedIn}
          isCartEmpty={isCartEmpty}
        />
      </header>
      <main className={classes.main}>
        <Container maxWidth='lg'>
          <div style={{ flexGrow: 1 }}>{children}</div>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Link href='/'>
          <a className={classes.link}>
            <strong>Интернет-магазин. Нумизматика и бонистика</strong>
          </a>
        </Link>
        <BottomAppBar />
      </footer>
    </div>
  )
}

import { Container } from '@mui/material'
import { getSession } from 'next-auth/client'
import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  updateIsLoggedInAC,
  updateUserAC,
} from '../../redux/actions/appActions'
import { initItems } from '../../redux/actions/cartActions'
import { IRootState } from '../../redux/reducers'
import { ELoggedIn } from '../../types/ELoggedIn'
import BottomAppBar from './bottomAppBar'
import { Nav } from './nav'

type TProps = {
  children: React.ReactNode
  title: string
}

export default function Layout({ children, title }: TProps) {
  const dispatch = useDispatch()
  const currentEmail = useSelector(
    (state: IRootState) => state.app.currentEmail
  )
  const currentRole = useSelector((state: IRootState) => state.app.currentRole)
  const isLoggedIn = useSelector((state: IRootState) => state.app.isLoggedIn)

  useEffect(() => {
    if (isLoggedIn === ELoggedIn.Unknown) {
      ;(async () => {
        const session: any = await getSession()

        if (session) {
          dispatch(updateIsLoggedInAC(ELoggedIn.True))
          dispatch(
            updateUserAC(
              session.user.name,
              session.user.email,
              session.databaseId,
              session.role
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

      <main>
        <Container maxWidth='lg'>
          <div>{children}</div>
        </Container>
      </main>

      <footer>
        <BottomAppBar />
      </footer>
    </div>
  )
}

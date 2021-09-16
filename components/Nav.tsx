import {
  AppBar,
  Container,
  createStyles,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { ELoggedIn } from '../types/ELoggedIn'
import SignInButtons from './auth/sign_in_button'
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded'
import { useRouter } from 'next/router'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    link: {
      color: 'white',
      textDecoration: 'none',
    },
  })
)

type TProps = {
  currentUser: string | undefined
  currentEmail: string | undefined
  currentId: string | undefined
  currentRole: string
  isLoggedIn: any
  isCartEmpty: any
}

export function Nav({
  currentUser,
  currentEmail,
  currentId,
  currentRole,
  isLoggedIn,
  isCartEmpty,
}: TProps) {
  const classes = useStyles()
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/cart')
  }

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar variant="dense" className={classes.root}>
          <Typography variant="subtitle2" className={classes.root}>
            Нумизматика и бонистика
          </Typography>
          <Hidden xsDown>
            {isLoggedIn === ELoggedIn.True && (
              <div>Вы вошли как {currentEmail}</div>
            )}
          </Hidden>
          {!!isCartEmpty.length && (
            <div>
              <IconButton color="inherit" onClick={handleClick}>
                <ShoppingCartRoundedIcon />
              </IconButton>
            </div>
          )}
          {isLoggedIn !== ELoggedIn.Unknown && (
            <SignInButtons isSignedIn={isLoggedIn === ELoggedIn.True} />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

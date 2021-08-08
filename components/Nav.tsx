import {
  AppBar,
  createStyles,
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

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/cart')
  }

  return (
    <AppBar position="static">
      <Toolbar variant="dense" className={classes.root}>
        <Typography variant="h6" className={classes.root}>
          Paper Money Shop
        </Typography>
        {isLoggedIn === ELoggedIn.True && (
          <div>
            Signed in as {currentUser} with {currentEmail} your role is{' '}
            {currentRole}
          </div>
        )}
        {isLoggedIn !== ELoggedIn.Unknown && (
          <SignInButtons isSignedIn={isLoggedIn === ELoggedIn.True} />
        )}
        {!!isCartEmpty.length && (
          <div>
            <IconButton color="inherit" onClick={handleClick}>
              <ShoppingCartRoundedIcon />
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

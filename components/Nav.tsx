import {
  AppBar,
  createStyles,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { ELoggedIn } from '../types/ELoggedIn'
import SignInButtons from './auth/sign_in_button'

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
}

export function Nav({
  currentUser,
  currentEmail,
  currentId,
  currentRole,
  isLoggedIn,
}: TProps) {
  const classes = useStyles()
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
      </Toolbar>
    </AppBar>
  )
}

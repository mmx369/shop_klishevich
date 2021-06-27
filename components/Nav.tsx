import {
  AppBar,
  Button,
  createStyles,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import Link from 'next/link'
import React from 'react'

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

export function Nav() {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar variant="dense" className={classes.root}>
        <Typography variant="h6">Paper Money Shop</Typography>

        <Button color="inherit" className={classes.root}>
          <Link href="/">
            <a className={classes.link}>
              <Typography color="inherit">Home</Typography>
            </a>
          </Link>
        </Button>

        <Button color="inherit" className={classes.root}>
          <Link href="/test_redux">
            <a className={classes.link}>
              <Typography color="inherit">Test redux page</Typography>
            </a>
          </Link>
        </Button>

        <Button color="inherit" className={classes.root}>
          <Link href="/test_database">
            <a className={classes.link}>
              <Typography color="inherit">Test database</Typography>
            </a>
          </Link>
        </Button>
        <Button color="inherit" className={classes.root}>
          <Link href="/people">
            <a className={classes.link}>
              <Typography color="inherit">People</Typography>
            </a>
          </Link>
        </Button>
        <Button color="inherit" className={classes.root}>
          <Link href="/login">
            <a className={classes.link}>
              <Typography color="inherit">Login</Typography>
            </a>
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

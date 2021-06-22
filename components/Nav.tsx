import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import Link from 'next/link'
import React from 'react'

export function Nav() {

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6">
          Car Trader
        </Typography>

        <Button color="inherit">
          <Link href="/">
            <a style={{ color: 'white' }}>
              <Typography color="inherit">Home</Typography>
            </a>
          </Link>
        </Button>

        <Button color="inherit">
          <Link href="/test_redux">
            <a style={{ color: 'white' }}>
              <Typography color="inherit">Test redux page</Typography>
            </a>
          </Link>
        </Button>

        <Button color="inherit">
          <Link href="/test_database">
            <a style={{ color: 'white' }}>
              <Typography color="inherit">Test database</Typography>
            </a>
          </Link>
        </Button>


      </Toolbar>
    </AppBar>
  )
}

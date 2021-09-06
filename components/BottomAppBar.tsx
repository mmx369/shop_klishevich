import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import { Hidden } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    link: {
      textDecoration: 'none',
    },
  })
)

export default function BottomAppBar() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar variant="dense">
          <Hidden xsDown>
            <Link href="/">
              <a className={classes.link}>
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  disableElevation
                >
                  Главная
                </Button>
              </a>
            </Link>
          </Hidden>
          <Link href="/paymentandshipping">
            <a className={classes.link}>
              <Button
                color="primary"
                variant="contained"
                size="small"
                disableElevation
              >
                Оплата и доставка
              </Button>
            </a>
          </Link>

          <Link href="/faq">
            <a className={classes.link}>
              <Button
                color="primary"
                variant="contained"
                size="small"
                disableElevation
              >
                Вопросы и ответы
              </Button>
            </a>
          </Link>
          <Link href="/contacts">
            <a className={classes.link}>
              <Button
                color="primary"
                variant="contained"
                size="small"
                disableElevation
              >
                Контакты
              </Button>
            </a>
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

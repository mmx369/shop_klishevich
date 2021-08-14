import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Link from 'next/link'

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
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
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
        <Toolbar>
          {/* <div className={classes.grow} /> */}
          <Link href="/">
            <a className={classes.link}>
              <Button color="primary" variant="contained" disableElevation>
                Главная
              </Button>
            </a>
          </Link>
          <Link href="/paymentandshipping">
            <a className={classes.link}>
              <Button color="primary" variant="contained" disableElevation>
                Оплата и доставка
              </Button>
            </a>
          </Link>

          <Link href="/faq">
            <a className={classes.link}>
              <Button color="primary" variant="contained" disableElevation>
                Вопросы и ответы
              </Button>
            </a>
          </Link>
          <Link href="/contacts">
            <a className={classes.link}>
              <Button color="primary" variant="contained" disableElevation>
                Контакты
              </Button>
            </a>
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

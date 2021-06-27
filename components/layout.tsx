import React from 'react'
import Head from 'next/head'
import { Nav } from './Nav'
import { createStyles, makeStyles } from '@material-ui/core'
import Link from 'next/link'

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
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Nav />
      </header>
      <main className={classes.main}>
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

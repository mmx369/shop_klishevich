import { createStyles, makeStyles, Typography } from '@material-ui/core'
import { useSession } from 'next-auth/client'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/layout'
import { ERole } from '../../types/ERole'

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

type TProps = {}

export default function Homepage(props: TProps) {
  const classes = useStyles()
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return null
  if (!session) {
    return (
      <Layout title="Admin profile">
        <h1>You must sign in</h1>;
      </Layout>
    )
  }
  if (session.role !== ERole.Admin) {
    return (
      <Layout title="Admin profile">
        <h1>You must be an admin to see this page</h1>;
      </Layout>
    )
  }
  return (
    <Layout title="Admin profile">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores rem
        quos minima facere mollitia nihil culpa ipsam saepe eum, ipsum, deleniti
        quas non in maxime eaque! Iste odit quis labore?
      </p>
      <Link href="/admin/addnewitem">
        <a className={classes.link}>
          <Typography color="inherit">Add new item to the shop</Typography>
        </a>
      </Link>
    </Layout>
  )
}

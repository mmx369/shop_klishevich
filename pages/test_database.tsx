import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import User from '../models/shopUser'
import { GetServerSideProps } from 'next'
import Layout from '../components/layout'
import { AddNewUserForm } from '../components/AddNewUserForm'
import { useSession } from 'next-auth/client'
import { ERole } from '../types/ERole'

export default function testDatabase({ res }: any) {
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

  const newList = JSON.parse(res)
  return (
    <Layout title="Test Database">
      <AddNewUserForm />

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">E-mail</TableCell>
              <TableCell align="right">Registration date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newList.map((row: any) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell align="right">{row.role}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">
                  {new Date(row.date).toDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await User.find({})
    if (!data) {
      return {
        notFound: true,
      }
    }
    const res = JSON.stringify(data)
    return {
      props: { res }, // will be passed to the page component as props
    }
  } catch (e) {
    console.error(e)
  }
}

import { GetServerSideProps, NextPageContext } from 'next'
import Router from 'next/router'
import { myGet } from '../middleware/myGet'

export default function People({ people }: any) {
  return (
    <div>
      Hello people:
      {JSON.stringify(people)}
    </div>
  )
}

People.getInitialProps = async (ctx: NextPageContext) => {
  const json = await myGet('http://localhost:3000/api/people', ctx)
  return { people: json }
}

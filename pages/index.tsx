import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from '../components/layout'
import { getTypes, Type } from '../database/getType'
import { Country, getCountry } from '../database/getCountry'
import { getAsString } from '../database/getAsString'
import Search from '../components/Search'

export interface HomepageProps {
  types: Type[]
  countries: Country[]
}

export default function Homepage({ types, countries }: HomepageProps) {
  return (
    <Layout title="Paper Money Shop">
      <Search types={types} countries={countries} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const type = getAsString(ctx.query.type)
  const [types, countries] = await Promise.all([getTypes(), getCountry(type)])
  return { props: { types, countries } }
}

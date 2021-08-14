import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../components/layout'
import { getTypes, Type } from '../database/getType'
import { Country, getCountry } from '../database/getCountry'
import { getAsString } from '../database/getAsString'
import Search from '../components/Search'
import Catalog from '../components/Catalog'
import { Grid } from '@material-ui/core'
import MainTextBlock from '../components/MainTextBlock'

export interface HomepageProps {
  types: Type[]
  countries: Country[]
  listOfCountries: Country[]
  listOfCountriesCoins: Country[]
}

export default function Homepage({
  types,
  countries,
  listOfCountries,
  listOfCountriesCoins,
}: HomepageProps) {
  return (
    <Layout title="Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет">
      <Grid container spacing={3} item xs={12}>
        <div
          style={{
            border: 'ridge 5px',
            padding: '5px',
            margin: '10px',
          }}
        >
          <MainTextBlock />
        </div>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Catalog
            listOfCountries={listOfCountries}
            listOfCountriesCoins={listOfCountriesCoins}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Search types={types} countries={countries} />
        </Grid>
      </Grid>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const type = getAsString(ctx.query.type)
    const [types, countries, listOfCountries, listOfCountriesCoins] =
      await Promise.all([
        getTypes(),
        getCountry(type),
        getCountry('Paper Money'),
        getCountry('Coins'),
      ])
    return {
      props: { types, countries, listOfCountries, listOfCountriesCoins },
    }
  } catch (err) {
    console.error(err)
    return {
      notFound: true,
    }
  }
}

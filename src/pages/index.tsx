import { Grid } from '@mui/material'
import { GetServerSideProps } from 'next'
import Catalog from '../components/homepage/Catalog'
import MainTextBlock from '../components/homepage/MainTextBlock'
import Search from '../components/homepage/Search'
import Layout from '../components/layout/layout'
import { PRODUCTS_TYPES } from '../constants'
import { getData, ICountryCount, IProductTypesCount } from '../lib/getData'

export type TProps = {
  productTypesCount: IProductTypesCount[]
  listOfCountriesCount: ICountryCount[]
  listOfCountriesCoinsCount: ICountryCount[]
}

export default function Homepage({
  productTypesCount,
  listOfCountriesCount,
  listOfCountriesCoinsCount,
}: TProps) {
  return (
    <Layout title='Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MainTextBlock />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Catalog
            listOfCountries={listOfCountriesCount}
            listOfCountriesCoins={listOfCountriesCoinsCount}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Search productTypesCount={productTypesCount} countriesCount={[]} />
        </Grid>
      </Grid>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [productTypesCount, listOfCountriesCount, listOfCountriesCoinsCount] =
      await Promise.all([
        //counts number of product for every product type
        getData.getTypesCount(PRODUCTS_TYPES),
        //counts number of product for every country in Paper Money category
        getData.getCountry('Paper Money'),
        getData.getCountry('Coins'),
      ])

    return {
      props: {
        productTypesCount,
        listOfCountriesCount,
        listOfCountriesCoinsCount,
      },
    }
  } catch (err) {
    console.error(err)
    return {
      notFound: true,
    }
  }
}

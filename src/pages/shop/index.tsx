import { Grid } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import deepEqual from 'fast-deep-equal'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { stringify } from 'querystring'
import { useState } from 'react'
import useSWR from 'swr'
import Search from '../../components/homepage/Search'
import Layout from '../../components/layout/layout'
import { ShopCard } from '../../components/shop/ShopCard'
import { ShopPagination } from '../../components/shop/ShopPagination'
import { PRODUCTS_TYPES } from '../../constants'
import { getAsString } from '../../lib/getAsString'
import { getData, ICountryCount, IProductTypesCount } from '../../lib/getData'
import { getPaginatedItem } from '../../lib/getPaginatedItems'
import { serializeData } from '../../lib/serialize'
import { IProduct } from '../../types/Product'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '50px',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })
)

export type TProps = {
  productTypesCount: IProductTypesCount[]
  countProductsForEveryCountry: ICountryCount[]
  goods: IProduct[]
  totalPages: number
}

export default function ShopList({
  productTypesCount,
  countProductsForEveryCountry,
  goods,
  totalPages,
}: TProps) {
  const { query } = useRouter()
  const classes = useStyles()
  const [serverQuery] = useState(query)
  const { data } = useSWR('/api/shop?' + stringify(query), {
    dedupingInterval: 15000,
    initialData: deepEqual(query, serverQuery)
      ? { goods, totalPages }
      : undefined,
  })

  return (
    <Layout title='Интернет-магазин | Бонистика и нумизматика'>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Search
              singleColumn
              productTypesCount={productTypesCount}
              countriesCount={countProductsForEveryCountry}
            />
          </Grid>
          <Grid container item xs={12} sm={8} spacing={2}>
            <Grid item xs={12}>
              <ShopPagination totalPages={data?.totalPages as number} />
            </Grid>
            {(data?.goods || []).map((item: IProduct) => (
              <Grid key={item._id} item xs={12} sm={6}>
                <ShopCard item={item} />
              </Grid>
            ))}
            <Grid item xs={12}>
              <ShopPagination totalPages={data?.totalPages as number} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const productsType = getAsString(ctx.query.type)

  const [productTypesCount, countProductsForEveryCountry, pagination] =
    await Promise.all([
      //counts number of product for every category
      getData.getTypesCount(PRODUCTS_TYPES),
      //counts number of product for every country in specific category
      getData.getCountry(productsType),
      //get items and totalPages
      getPaginatedItem(ctx.query),
    ])

  const goodsSerialized = serializeData(pagination.goods)

  return {
    props: {
      productTypesCount,
      countProductsForEveryCountry,
      goods: goodsSerialized,
      totalPages: pagination.totalPages,
    },
  }
}

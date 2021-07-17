import { Grid } from '@material-ui/core'
import React from 'react'
import Search from '../components/Search'
import Layout from '../components/layout'
import { getAsString } from '../database/getAsString'
import { getTypes, Type } from '../database/getType'
import { Country, getCountry } from '../database/getCountry'
import { GetServerSideProps } from 'next'
import { ItemModel } from './goods/[type]/[country]/[id]'
import { getPaginatedItem } from '../database/getPaginatedItems'
import {
  Pagination,
  PaginationItem,
  PaginationRenderItemParams,
} from '@material-ui/lab'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ParsedUrlQuery } from 'querystring'

export interface ShopListProps {
  types: Type[]
  countries: Country[]
  goods: ItemModel[]
  totalPages: number
}

export default function ShopList({
  types,
  countries,
  goods,
  totalPages,
}: ShopListProps) {
  const { query } = useRouter()
  return (
    <Layout title="Shop Page">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5} md={3} lg={2}>
          <Search singleColumn types={types} countries={countries} />
        </Grid>
        <Grid item xs={12} sm={7} md={9} lg={10}>
          <Pagination
            page={parseInt(getAsString(query.page) || '1')}
            count={totalPages}
            renderItem={(item) => (
              <PaginationItem
                component={MaterialUiLink}
                query={query}
                item={item}
                {...item}
              />
            )}
          />
          <pre>TOTAL PAGES: {totalPages}</pre>
          <pre>{goods}</pre>
        </Grid>
      </Grid>
    </Layout>
  )
}

export interface MaterialUiLinkProps {
  item: PaginationRenderItemParams
  query: ParsedUrlQuery
}

export function MaterialUiLink({ item, query, ...props }: MaterialUiLinkProps) {
  return (
    <Link
      href={{
        pathname: '/shop',
        query: { ...query, page: item.page },
      }}
    >
      <a {...props}></a>
    </Link>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const type = getAsString(ctx.query.type)
  console.log(1111, ctx.query)

  const [types, countries, pagination] = await Promise.all([
    getTypes(),
    getCountry(type),
    getPaginatedItem(ctx.query),
  ])

  console.log(
    '!!!!',
    'result:',
    pagination.result,
    'TotalPages:',
    pagination.totalPages
  )

  const goods = JSON.stringify(pagination.result, null, 2)
  const totalPages = pagination.totalPages

  return {
    props: {
      types,
      countries,
      goods,
      totalPages,
    },
  }
}

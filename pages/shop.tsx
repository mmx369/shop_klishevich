import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import Search from '../components/Search'
import Layout from '../components/layout'
import { getAsString } from '../database/getAsString'
import { getTypes, Type } from '../database/getType'
import { Country, getCountry } from '../database/getCountry'
import { GetServerSideProps } from 'next'
import { getPaginatedItem } from '../database/getPaginatedItems'
import { useRouter } from 'next/router'
import { ParsedUrlQuery, stringify } from 'querystring'
import useSWR from 'swr'
import deepEqual from 'fast-deep-equal'
import { ShopPagination } from '../components/ShopPagination'
import { ShopCard } from '../components/ShopCard'

export interface ShopListProps {
  types: Type[]
  countries: Country[]
  goods: any
  totalPages: number
  serverQuery: ParsedUrlQuery
}

export default function ShopList({
  types,
  countries,
  goods,
  totalPages,
}: ShopListProps) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={5} md={3} lg={2}>
        <Search singleColumn types={types} countries={countries} />
      </Grid>
      <Grid item xs={12} sm={5} md={3} lg={2}>
        <pre style={{ fontSize: '1rem' }}>
          {JSON.stringify({ totalPages, goods }, null, 2)}
        </pre>
      </Grid>
    </Grid>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const type = getAsString(ctx.query.type)
  const [types, countries, pagination] = await Promise.all([
    getTypes(),
    getCountry(type),
    getPaginatedItem(ctx.query),
  ])
  //@ts-ignore
  const goodsSerialized = pagination.goods.map(
    //@ts-ignore
    ({ _doc: { _id, date, ...rest } }) => {
      rest.id = _id.toString()
      return rest
    }
  )

  return {
    props: {
      types,
      countries,
      goods: goodsSerialized,
      totalPages: pagination.totalPages,
    },
  }
}

// export default function ShopList(
//   types,
//   countries,
//   goods,
//   totalPages,
//   ShopListProps
// ) {
//   console.log(11111, goods)

// const { query } = useRouter()
// const [serverQuery] = useState(query)
// goods = JSON.parse(goods)
// const { data } = useSWR('/api/shop?' + stringify(query), {
//   dedupingInterval: 15000,
//   initialData: deepEqual(query, serverQuery)
//     ? { goods, totalPages }
//     : undefined,
// })

//   return (
//     <Layout title="Shop Page">
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={5} md={3} lg={2}>
//           <Search singleColumn types={types} countries={countries} />
//         </Grid>

//         <Grid container item xs={12} sm={7} md={9} lg={10} spacing={3}>
//           <Grid item xs={12}>
//             {/* <ShopPagination totalPages={data?.totalPages} /> */}
//           </Grid>
//           {/* {(data?.goods || []).map((el) => (
//             <Grid key={el.id} item xs={12} sm={6}>
//               <ShopCard item={el} />
//             </Grid>
//           ))} */}
//           <Grid item xs={12}>
//             {/* <ShopPagination totalPages={data?.totalPages} /> */}
//           </Grid>
//         </Grid>
//       </Grid>
//       {/* <pre>{JSON.stringify(goods, null, 4)}</pre> */}
//     </Layout>
//   )
// }

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const type = getAsString(ctx.query.type)

//   const [types, countries, pagination] = await Promise.all([
//     getTypes(),
//     getCountry(type),
//     getPaginatedItem(ctx.query),
//   ])
//   console.log('!!!!!!', types, countries, pagination)

//   const goods = JSON.stringify(pagination.result, null, 2)

//   const totalPages = pagination.totalPages

//   return {
//     props: {
//       types,
//       countries,
//       goods,
//       totalPages,
//     },
//   }
// }

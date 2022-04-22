import {
  Pagination,
  PaginationItem,
  PaginationRenderItemParams,
} from '@mui/material'
import Link from 'next/link'
import { ParsedUrlQuery } from 'querystring'
import { forwardRef } from 'react'
import { NextRouter, useRouter } from 'next/router'
import { getAsString } from '../../lib/getAsString'

export function ShopPagination({ totalPages }: { totalPages: number }) {
  const { query }: NextRouter = useRouter()

  return (
    <Pagination
      page={parseInt(getAsString(query.page!) || '1')}
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
  )
}

export interface MaterialUiLinkProps {
  item: PaginationRenderItemParams
  query: ParsedUrlQuery
}

const MaterialUiLink = forwardRef<HTMLAnchorElement, MaterialUiLinkProps>(
  ({ item, query, ...props }, ref) => (
    <Link
      href={{
        pathname: '/shop',
        query: { ...query, page: item.page },
      }}
      shallow
    >
      <a {...props} ref={ref}></a>
    </Link>
  )
)

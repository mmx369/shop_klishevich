import {
  Pagination,
  PaginationItem,
  PaginationRenderItemParams,
} from "@material-ui/lab";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { forwardRef } from "react";
import { useRouter } from "next/router";
import { getAsString } from "../../database/getAsString";

export function ShopPagination({ totalPages }: { totalPages: number }) {
  const { query } = useRouter();
  return (
    <Pagination
      page={parseInt(getAsString(query.page) || "1")}
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
  );
}

export interface MaterialUiLinkProps {
  item: PaginationRenderItemParams;
  query: ParsedUrlQuery;
}

const MaterialUiLink = forwardRef<HTMLAnchorElement, MaterialUiLinkProps>(
  ({ item, query, ...props }, ref) => (
    <Link
      href={{
        pathname: "/shop",
        query: { ...query, page: item.page },
      }}
      shallow
    >
      <a {...props} ref={ref}></a>
    </Link>
  )
);

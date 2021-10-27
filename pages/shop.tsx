import { createStyles, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import { getAsString } from "../database/getAsString";
import { getTypes, Type } from "../database/getType";
import { Country, getCountry } from "../database/getCountry";
import { GetServerSideProps } from "next";
import { getPaginatedItem } from "../database/getPaginatedItems";
import { useRouter } from "next/router";
import { stringify } from "querystring";
import useSWR from "swr";
import deepEqual from "fast-deep-equal";
import { ShopPagination } from "../components/ShopPagination";
import { ShopCard } from "../components/ShopCard";
import Layout from "../components/layout";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginBottom: "30px",
    },
  })
);

export interface ShopListProps {
  types: Type[];
  countries: Country[];
  goods: any;
  totalPages: number;
}

export default function ShopList({
  types,
  countries,
  goods,
  totalPages,
}: ShopListProps) {
  const { query } = useRouter();
  const classes = useStyles();
  const [serverQuery] = useState(query);
  const { data } = useSWR("/api/shop?" + stringify(query), {
    // dedupingInterval: 15000,
    initialData: deepEqual(query, serverQuery)
      ? { goods, totalPages }
      : undefined,
  });

  return (
    // //TODO: use skeleton to avoid blinking
    <Layout title="Интернет-магазин | Бонистика и нумизматика">
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} sm={5} md={3} lg={2}>
          <Search singleColumn types={types} countries={countries} />
        </Grid>
        <Grid container item xs={12} sm={7} md={9} lg={10} spacing={2}>
          <Grid item xs={12}>
            <ShopPagination totalPages={data?.totalPages} />
          </Grid>
          {(data?.goods || []).map((item) => (
            <Grid key={item._id} item xs={12} sm={6}>
              <ShopCard item={item} />
            </Grid>
          ))}
          <Grid item xs={12}>
            <ShopPagination totalPages={data?.totalPages} />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const type = getAsString(ctx.query.type);
  const [types, countries, pagination] = await Promise.all([
    getTypes(),
    getCountry(type),
    getPaginatedItem(ctx.query),
  ]);
  //@ts-ignore
  const goodsSerialized = pagination.goods.map(
    //@ts-ignore
    ({ _doc: { _id, date, ...rest } }) => {
      rest._id = _id.toString();
      return rest;
    }
  );

  return {
    props: {
      types,
      countries,
      goods: goodsSerialized,
      totalPages: pagination.totalPages,
    },
  };
};

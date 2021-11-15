import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { ItemModel } from "../pages/goods/[type]/[country]/[id]";
import Link from "next/link";
import { translateCategory } from "../lib/translate";
import { translateCountry } from "../lib/translate";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      backgroundColor: "#f9fbe7",
    },
    media: {
      backgroundSize: "contain",
      paddingTop: "56.25%", // 16:9
    },
    achorTag: {
      textDecoration: "none",
    },
  })
);

export interface ShopCardProps {
  item: ItemModel;
}

export function ShopCard({ item }: ShopCardProps) {
  const classes = useStyles();
  return (
    <>
      <Link
        href="/goods/[type]/[country]/[id]"
        as={`/goods/${item.category}/${item.country}/${item._id}`}
      >
        <a className={classes.achorTag}>
          <Card elevation={5} className={classes.paper}>
            <CardHeader
              title={`${translateCategory(item.category)} | ${translateCountry(
                item.country
              )}`}
              subheader={item.nameOfGoods}
            />
            <CardMedia
              className={classes.media}
              image={item.imageUrl[0]}
              title={item.nameOfGoods}
            />
            )
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Цена: {item.priceOfGoods} рублей. Остаток:{" "}
                {item.amountOfGoods > 0
                  ? item.amountOfGoods + " шт."
                  : "Товар отсутствует"}
              </Typography>
            </CardContent>
          </Card>
        </a>
      </Link>
    </>
  );
}

import {
  ButtonBase,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
import { GetServerSideProps } from 'next'
import React from 'react'
import ShopGoods from '../../../../models/shopGoods'

interface ItemsDetailsProps {
  item: string | null | undefined
}

export interface ItemModel {
  id: number
  imageUrl: string[]
  nameOfGoods: string
  amountOfGoods: number
  priceOfGoods: number
  country: string
  category: string
}

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
    },
    img: {
      width: '100%',
    },
  })
)

export default function ItemsDetails({ item }: ItemsDetailsProps) {
  const classes = useStyles()
  console.log(393939, item)

  if (item === 'null') {
    return <h1>Извините такой товар не найден!</h1>
  }

  const list: ItemModel = JSON.parse(item)

  return (
    <div>
      <div>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={5}>
              <img
                className={classes.img}
                alt="complex"
                src={list.imageUrl[0]}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={7} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h4">
                    {list.category} | {list.country}
                  </Typography>
                  <Typography gutterBottom variant="h4">
                    {list.nameOfGoods}
                  </Typography>
                  <Typography gutterBottom variant="h4">
                    {list.priceOfGoods} руб.
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                  >
                    Количество: {list.amountOfGoods} шт.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>

      {JSON.stringify(list, null, 4)}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params.id
  console.log(111, id)

  const data = await ShopGoods.findById(id).exec()
  console.log(222, data)
  const item = JSON.stringify(data)

  return { props: { item: item || null } }
}

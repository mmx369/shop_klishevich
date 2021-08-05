import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
import { GetServerSideProps } from 'next'
import React from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../../../../components/layout'
import ShopGoods from '../../../../models/shopGoods'
import { addNewItem } from '../../../../redux/actions/cartActions'

interface ItemsDetailsProps {
  item: ItemModel | null | undefined
}

export interface ItemModel {
  _id: string
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
  const dispatch = useDispatch()

  const handleDispatch = (id) => {
    dispatch(addNewItem(id))
  }

  if (item === null) {
    return <h1>Извините такой товар не найден!</h1>
  }

  return (
    <div>
      <Layout title={item.country + ' ' + item.nameOfGoods}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={5}>
              <img
                className={classes.img}
                alt="complex"
                src={item.imageUrl[0]}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={7} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h4">
                    {item.category} | {item.country}
                  </Typography>
                  <Typography gutterBottom variant="h4">
                    {item.nameOfGoods}
                  </Typography>
                  <Typography gutterBottom variant="h4">
                    {item.priceOfGoods} руб.
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                  >
                    Количество: {item.amountOfGoods} шт.
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      console.log('Added to cart')
                      handleDispatch(item._id)
                    }}
                  >
                    добавить в корзину
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Layout>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params.id
  const data = await ShopGoods.findById(id).exec()
  //@ts-ignore
  const item = data._doc

  const serializedItem = {
    ...item,
    _id: item._id.toString(),
    date: item.date.toString(),
  }

  return { props: { item: serializedItem || null } }
}

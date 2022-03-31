import { makeStyles, createStyles } from '@mui/styles'
import { ItemModel } from '../../pages/shop/goods/[type]/[country]/[id]'
import Link from 'next/link'
import { translateCategory } from '../../lib/translate'
import { translateCountry } from '../../lib/translate'
import React from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { addNewItem } from '../../redux/actions/cartActions'

const useStyles = makeStyles(() =>
  createStyles({
    media: {
      backgroundSize: 'contain',
      paddingTop: '56.25%', // 16:9
    },
    achorTag: {
      textDecoration: 'none',
      color: 'black',
    },
    btn: {
      marginLeft: '5px',
    },
  })
)

export interface ShopCardProps {
  item: ItemModel
}

export function ShopCard({ item }: ShopCardProps) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleDispatch = (id: string) => {
    dispatch(addNewItem(id, 1))
  }

  return (
    <>
      <Card elevation={1}>
        <Link
          href='/shop/goods/[type]/[country]/[id]'
          as={`/shop/goods/${item.category}/${item.country}/${item._id}`}
        >
          <a className={classes.achorTag}>
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
          </a>
        </Link>
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            Цена: {item.priceOfGoods} рублей. Остаток:{' '}
            {item.amountOfGoods > 0
              ? item.amountOfGoods + ' шт.'
              : 'Товар отсутствует'}
            <span>
              <Button
                size='small'
                variant='contained'
                color='primary'
                className={classes.btn}
                onClick={() => {
                  handleDispatch(item._id)
                }}
              >
                в корзину
              </Button>
            </span>
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

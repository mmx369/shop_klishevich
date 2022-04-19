import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'
import { ROUBLE } from '../../constants'
import { translateCategory, translateCountry } from '../../lib/translate'
import { addNewItem } from '../../redux/actions/cartActions'
import { IProduct } from '../../types/Product'

const useStyles = makeStyles(() =>
  createStyles({
    media: {
      backgroundSize: 'contain',
      paddingTop: '56.25%', // 16:9
    },
    btn: {
      marginTop: '5px',
    },
  })
)

export interface IShopCardProps {
  item: IProduct
}

export function ShopCard({ item }: IShopCardProps) {
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
          <a>
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
            Цена:{' '}
            <strong>
              {item.priceOfGoods} {ROUBLE}
            </strong>
            . Остаток:{' '}
            {item.amountOfGoods > 0
              ? item.amountOfGoods + ' шт.'
              : 'Товар отсутствует'}
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
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

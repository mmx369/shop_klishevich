import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { ItemModel } from '../pages/goods/[type]/[country]/[id]'
import Link from 'next/link'

const useStyles = makeStyles((theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
    achorTag: {
      textDecoration: 'none',
    },
  })
)

export interface ShopCardProps {
  item: ItemModel
}

export function ShopCard({ item }: ShopCardProps) {
  const classes = useStyles()

  return (
    <>
      <Link
        href="/goods/[type]/[country]/[id]"
        as={`/goods/${item.category}/${item.country}/${item._id}`}
      >
        <a className={classes.achorTag}>
          <Card elevation={5}>
            <CardHeader
              title={item.category + ' ' + item.country}
              subheader={item.nameOfGoods}
            />
            <CardMedia
              className={classes.media}
              image={item.imageUrl[0]}
              title={item.nameOfGoods}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Цена: {item.priceOfGoods} рублей. Остаток: {item.amountOfGoods}{' '}
                шт.
              </Typography>
            </CardContent>
          </Card>
        </a>
      </Link>
    </>
  )
}

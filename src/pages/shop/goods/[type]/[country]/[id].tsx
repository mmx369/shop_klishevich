import classes from './[id].module.css'

import { useState } from 'react'
import { Button, Grid, Input, Typography } from '@material-ui/core'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../../../../components/layout/layout'
import ShopGoods from '../../../../../models/shopGoods'
import { addNewItem } from '../../../../../redux/actions/cartActions'
import {
  translateCategory,
  translateCountry,
} from '../../../../../lib/translate'
import Image from 'next/image'
import { toast } from 'react-toastify'
import axios from 'axios'
import { IRootState } from '../../../../../redux/reducers'

toast.configure()

interface ItemsDetailsProps {
  item: ItemModel | null | undefined
}

export interface ItemModel {
  _id: string
  imageUrl: string[]
  nameOfGoods: string
  amountOfGoods: number
  priceOfGoods: number
  catalogNumber: string
  country: string
  category: string
}

export default function ItemsDetails({ item }: ItemsDetailsProps) {
  const dispatch = useDispatch()
  const router = useRouter()

  const isLoggedIn = useSelector((state: IRootState) => state.app.isLoggedIn)

  const [value, setValue] = useState(item!.amountOfGoods > 0 ? 1 : 0)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
  }

  const handleBlur = () => {
    if (value < 0) {
      setValue(0)
    } else if (value > item!.amountOfGoods) {
      setValue(item!.amountOfGoods)
    }
  }

  const addToCart = async (id: string, value: number) => {
    try {
      const cartData = { id, quantity: value }
      await axios.post(`${process.env.RESTURL}/api/addtocart`, cartData)
      toast.success(`Товар успешно добавлен`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      })
    } catch (e) {
      toast.error(`Ошибка: ${e.response.data.message}`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      })
      console.error(e)
    }
  }

  const handleDispatch = (id: string) => {
    dispatch(addNewItem(id, value))
    if (isLoggedIn) {
      addToCart(id, value)
    }
  }

  if (item === null) {
    return <h1>Извините такой товар не найден!</h1>
  }

  return (
    <>
      <Layout title={translateCountry(item!.country) + ' ' + item!.nameOfGoods}>
        <main className={classes.root}>
          <Button
            variant='contained'
            color='primary'
            onClick={() => router.back()}
          >
            назад
          </Button>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={5}>
              <Image
                src={item!.imageUrl[0] as string}
                alt={`${item!.country} | ${item!.nameOfGoods}`}
                width={300}
                height={300}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={7} container>
              <Grid item xs container direction='column' spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant='h6'>
                    {translateCategory(item!.category)} |
                    {translateCountry(item!.country)}
                  </Typography>
                  <Typography gutterBottom variant='h5'>
                    {item!.nameOfGoods}
                  </Typography>

                  {item!.catalogNumber && (
                    <Typography gutterBottom variant='subtitle1'>
                      Номер в каталоге: {item!.catalogNumber}
                    </Typography>
                  )}

                  <Typography gutterBottom variant='subtitle1'>
                    Цена за единицу: {item!.priceOfGoods} руб.
                  </Typography>
                  <Typography gutterBottom variant='subtitle1'>
                    Количество: {item!.amountOfGoods} шт.
                  </Typography>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => {
                      handleDispatch(item!._id)
                    }}
                  >
                    добавить в корзину
                  </Button>
                  <Input
                    className={classes.input}
                    value={value}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: `${item!.amountOfGoods}`,
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                    }}
                  />
                  <Typography variant='subtitle2'>
                    Номер, серия и подпись могут отличаться от представленных на
                    фото. Эта информация может быть предоставлена по запросу.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </main>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const productId = ctx.params.id
  const data = await ShopGoods.findById(productId).select('-date -__v')

  if (!data) {
    return { props: { item: null } }
  }

  const item = data._doc

  const serializedItem = {
    ...item,
    _id: item._id.toString(),
  }

  return { props: { item: serializedItem || null } }
}

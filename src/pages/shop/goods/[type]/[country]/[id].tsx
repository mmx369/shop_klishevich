import { Box, Button, Grid, Input, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Layout from '../../../../../components/layout/layout'
import { ROUBLE } from '../../../../../constants'
import { serializeData } from '../../../../../lib/serialize'
import {
  translateCategory,
  translateCountry,
} from '../../../../../lib/translate'
import ShopGoods from '../../../../../models/shopGoods'
import { addNewItem } from '../../../../../redux/actions/cartActions'
import { IRootState } from '../../../../../redux/reducers'

toast.configure()

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '50px',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    input: {
      margin: '10px',
    },
    img: {
      textAlign: 'center',
    },
  })
)

export interface IProductModel {
  _id: string
  imageUrl: string[]
  nameOfGoods: string
  amountOfGoods: number
  priceOfGoods: number
  catalogNumber?: string
  country: string
  category: string
}

type TProps = {
  item: IProductModel
}

export default function ItemsDetails({ item }: TProps) {
  const classes = useStyles()
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

  const handleDispatch = (id: string) => {
    dispatch(addNewItem(id, value))
  }

  return (
    <>
      <Layout title={translateCountry(item!.country) + ' ' + item!.nameOfGoods}>
        <main className={classes.root}>
          <Button
            sx={{ margin: '5px' }}
            variant='outlined'
            color='primary'
            size='small'
            onClick={() => router.back()}
          >
            назад
          </Button>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={5}>
              <Box className={classes.img}>
                <Image
                  src={item!.imageUrl[0] as string}
                  alt={`${item!.country} | ${item!.nameOfGoods}`}
                  width={300}
                  height={300}
                />
              </Box>
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
                    Цена за единицу:{' '}
                    <strong>
                      {item!.priceOfGoods} {ROUBLE}
                    </strong>
                  </Typography>
                  <Typography gutterBottom variant='subtitle1'>
                    Количество: {item!.amountOfGoods} шт.
                  </Typography>
                  <Button
                    variant='contained'
                    color='primary'
                    size='small'
                    onClick={() => {
                      handleDispatch(item!._id)
                    }}
                  >
                    в корзину
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

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const productId = ctx.params!.id
  const data: IProductModel | null = await ShopGoods.findById(productId).select(
    '-date -__v'
  )

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const serializedItem: IProductModel = serializeData([data])[0]

  return { props: { item: serializedItem } }
}

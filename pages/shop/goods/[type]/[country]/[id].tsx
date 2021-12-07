import { useState } from 'react'
import {
  Button,
  createStyles,
  Grid,
  Input,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import Layout from '../../../../../components/layout/layout'
import ShopGoods from '../../../../../models/shopGoods'
import { addNewItem } from '../../../../../redux/actions/cartActions'
import {
  translateCategory,
  translateCountry,
} from '../../../../../lib/translate'
import Image from 'next/image'

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

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      backgroundColor: 'white',
      maxWidth: '600px',
    },
    img: {
      width: '100%',
    },
    root: {
      width: 250,
    },
    input: {
      width: 42,
      margin: 10,
    },
    btn: {
      margin: 5,
    },
  })
)

export default function ItemsDetails({ item }: ItemsDetailsProps) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const router = useRouter()

  const [value, setValue] = useState<number>(item.amountOfGoods > 0 ? 1 : 0)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
  }

  const handleBlur = () => {
    if (value < 0) {
      setValue(0)
    } else if (value > item.amountOfGoods) {
      setValue(item.amountOfGoods)
    }
  }

  const handleDispatch = (id) => {
    dispatch(addNewItem(id, value))
  }

  if (item === null) {
    return <h1>Извините такой товар не найден!</h1>
  }

  return (
    <div>
      <Layout title={translateCountry(item.country) + ' ' + item.nameOfGoods}>
        <Paper className={classes.paper}>
          <Button
            className={classes.btn}
            variant='contained'
            color='primary'
            onClick={() => router.back()}
          >
            назад
          </Button>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={5}>
              <Image
                src={item.imageUrl[0]}
                alt={`${item.country} | ${item.nameOfGoods}`}
                width={300}
                height={300}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={7} container>
              <Grid item xs container direction='column' spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant='h6'>
                    {translateCategory(item.category)} |
                    {translateCountry(item.country)}
                  </Typography>
                  <Typography gutterBottom variant='h5'>
                    {item.nameOfGoods}
                  </Typography>

                  {item.catalogNumber && (
                    <Typography gutterBottom variant='subtitle1'>
                      Номер в каталоге: {item.catalogNumber}
                    </Typography>
                  )}

                  <Typography gutterBottom variant='subtitle1'>
                    Цена за единицу: {item.priceOfGoods} руб.
                  </Typography>
                  <Typography gutterBottom variant='subtitle1'>
                    Количество: {item.amountOfGoods} шт.
                  </Typography>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => {
                      handleDispatch(item._id)
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
                      max: `${item.amountOfGoods}`,
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

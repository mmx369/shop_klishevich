import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PRODUCTS_TYPES, ROUBLE } from '../constants'
import { COUNTRIES } from '../constants/translate_map'
import { useFilter } from '../hooks/useFilter'
import { translateCategory, translateCountry } from '../lib/translate'
import { IProduct } from '../types/Product'
import ModalEditGoods from './ModalEditGoods'

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      maxWidth: 275,
      height: 400,
    },
    media: {
      backgroundSize: 'contain',
      paddingTop: '56.25%', // 16:9
    },
  })
)

type TProps = {
  productList: IProduct[]
}

export default function ProductList({ productList }: TProps) {
  const classes = useStyles()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [id, setId] = useState('')
  const [price, setPrice] = useState<number | null>(null)
  const [amount, setAmount] = useState<number | null>(null)

  const [filter, setFilter] = useState({ category: '', country: '', query: '' })

  const filteredAndSearchedProduct = useFilter(
    productList,
    filter.category,
    filter.country,
    filter.query
  )

  const handleOpen = (
    id: string,
    price: number | null,
    amount: number | null
  ) => {
    setOpen(true)
    setId(id)
    setPrice(price)
    setAmount(amount)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Вы уверены что хотите удалить товар?')) {
      return
    }
    try {
      await axios.delete(`${process.env.RESTURL}/api/deleteitem`, { data: id })
      toast.success('Позиция успешна удалена', {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      })
      router.replace(router.asPath)
    } catch (e) {
      toast.error(`Ошибка: ${e.response.data.message}`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      })
      console.log(e)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Grid container>
        <Grid item sm={12} xs={6} sx={{ textAlign: 'center', margin: '10px' }}>
          <FormControl sx={{ minWidth: '20%', marginBottom: '5px' }}>
            <InputLabel id='filter-label'>Тип товара</InputLabel>
            <Select
              labelId='filter-label'
              id='filter-select'
              value={filter.category}
              label='Тип товара'
              defaultValue=''
              onChange={(e: SelectChangeEvent) => {
                setFilter({ ...filter, category: e.target.value })
              }}
            >
              <MenuItem value=''>
                <em>Не выбрано</em>
              </MenuItem>
              {PRODUCTS_TYPES.map((type) => (
                <MenuItem value={type} key={type}>
                  {translateCategory(type)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: '20%' }}>
            <InputLabel id='filter-label'>Страна</InputLabel>
            <Select
              labelId='filter-label'
              id='filter-select'
              value={filter.country}
              label='Тип товара'
              defaultValue=''
              onChange={(e: SelectChangeEvent) => {
                setFilter({ ...filter, country: e.target.value })
              }}
            >
              <MenuItem value=''>
                <em>Не выбрано</em>
              </MenuItem>
              {Object.keys(COUNTRIES).map((country) => (
                <MenuItem value={country} key={country}>
                  {translateCountry(country)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: '55%' }}>
            <TextField
              fullWidth
              placeholder='Поиск...'
              value={filter.query}
              onChange={(e) => {
                setFilter({ ...filter, query: e.currentTarget.value })
              }}
            />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {filteredAndSearchedProduct &&
          filteredAndSearchedProduct.map((item) => (
            <Grid item key={item._id}>
              <Card elevation={5} className={classes.card}>
                <CardHeader
                  title={`${translateCategory(
                    item.category
                  )} | ${translateCountry(item.country)}`}
                  subheader={item.nameOfGoods}
                />
                <CardMedia
                  className={classes.media}
                  image={item.imageUrl[0]}
                  title={item.nameOfGoods}
                />
                <CardContent>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Цена: {item.priceOfGoods} {ROUBLE}. Остаток:{' '}
                    {item.amountOfGoods > 0
                      ? item.amountOfGoods + ' шт.'
                      : 'Товар отсутствует'}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button
                    size='small'
                    color='primary'
                    onClick={() =>
                      handleOpen(item._id, item.priceOfGoods, null)
                    }
                  >
                    Изменить цену
                  </Button>
                  <Button
                    size='small'
                    color='primary'
                    onClick={() =>
                      handleOpen(item._id, null, item.amountOfGoods)
                    }
                  >
                    Изменить количество
                  </Button>
                  <Button
                    size='small'
                    color='primary'
                    onClick={() => handleDelete(item._id)}
                  >
                    Удалить товар
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>

      <ModalEditGoods
        open={open}
        price={price as number}
        amount={amount as number}
        id={id}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </>
  )
}

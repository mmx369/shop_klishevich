import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectProps,
} from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { Field, Form, Formik, useField, useFormikContext } from 'formik'
import router, { useRouter } from 'next/router'
import useSWR from 'swr'
import { getAsString } from '../../lib/getAsString'
import { ICountryCount, IProductTypesCount } from '../../lib/getData'
import { translateCategory, translateCountry } from '../../lib/translate'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: '10px',
      marginTop: '50px',
    },
    paper: {
      margin: 'auto',
      maxWidth: '500px',
      padding: '2rem',
    },
  })
)

export type TProps = {
  productTypesCount: IProductTypesCount[]
  countriesCount: ICountryCount[]
  singleColumn?: boolean
}

const prices = [0, 10, 100, 500, 1000, 5000, 10000]

export default function Search({
  productTypesCount,
  countriesCount,
  singleColumn,
}: TProps) {
  const classes = useStyles()
  const { query } = useRouter()
  const smValue = singleColumn ? 12 : 6

  const initialValues = {
    type: getAsString(query.type!) || 'all',
    country: getAsString(query.country!) || 'all',
    minPrice: getAsString(query.minPrice!) || 'all',
    maxPrice: getAsString(query.maxPrice!) || 'all',
  }

  return (
    <div className={classes.root}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          router.push(
            {
              pathname: '/shop',
              query: { ...values, page: 1 },
            },
            undefined,
            { shallow: true }
          )
        }}
      >
        {({ values }) => (
          <Form>
            <Paper elevation={2} className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={smValue}>
                  <FormControl fullWidth variant='standard'>
                    <InputLabel id='search-type'>Тип товара</InputLabel>
                    <Field
                      name='type'
                      as={Select}
                      labelId='search-type'
                      label='Type'
                    >
                      <MenuItem value='all'>
                        <em>Показать все</em>
                      </MenuItem>

                      {productTypesCount.map((type) => (
                        <MenuItem key={type.type} value={type.type}>
                          {`${translateCategory(type.type)} (${type.count})`}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={smValue}>
                  <CountrySelect
                    type={values.type}
                    name='country'
                    countries={countriesCount}
                  />
                </Grid>

                <Grid item xs={12} sm={smValue}>
                  <FormControl fullWidth variant='standard'>
                    <InputLabel id='search-min-price'>
                      Минимальная цена
                    </InputLabel>
                    <Field
                      name='minPrice'
                      as={Select}
                      labelId='search-min-price'
                      label='Min price'
                    >
                      <MenuItem value='all'>
                        <em>Не выбрано</em>
                      </MenuItem>
                      {prices.map((price) => (
                        <MenuItem key={price} value={price}>
                          {price}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={smValue}>
                  <FormControl fullWidth variant='standard'>
                    <InputLabel id='search-max-price'>
                      Максимальная цена
                    </InputLabel>
                    <Field
                      name='maxPrice'
                      as={Select}
                      labelId='search-max-price'
                      label='Max price'
                    >
                      <MenuItem value='all'>
                        <em>Не выбрано</em>
                      </MenuItem>
                      {prices.map((price) => (
                        <MenuItem key={price} value={price}>
                          {price}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    type='submit'
                    variant='contained'
                    color='primary'
                  >
                    Искать
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export interface CountrySelectProps extends SelectProps {
  name: string
  countries: ICountryCount[]
  type: string
}

export function CountrySelect({
  countries,
  type,
  ...props
}: CountrySelectProps) {
  const { setFieldValue } = useFormikContext()
  const [field] = useField({
    name: props.name,
  })

  const { data } = useSWR<ICountryCount[]>('/api/getcountry?type=' + type, {
    dedupingInterval: 60000,
    onSuccess: (newValues) => {
      if (!newValues.map((a) => a.country).includes(field.value)) {
        setFieldValue('country', 'all')
      }
    },
  })

  const newCountries = data || countries

  return (
    <FormControl fullWidth variant='standard'>
      <InputLabel id='search-country'>Страна</InputLabel>
      <Select labelId='search-country' label='Country' {...field} {...props}>
        <MenuItem value='all'>
          <em>Показать все</em>
        </MenuItem>
        {newCountries.map((country) => (
          <MenuItem key={country.country} value={country.country}>
            {`${translateCountry(country.country)} (${country.count})`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

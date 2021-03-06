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
import React, { useEffect, useState } from 'react'
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

export default function Search({
  productTypesCount,
  countriesCount,
  singleColumn,
}: TProps) {
  const classes = useStyles()
  const { query } = useRouter()
  const smValue = singleColumn ? 12 : 6

  const prices = [0, 10, 100, 500, 1000, 5000, 10000]
  const [minPrice, setMinPrice] = useState<string | number>('all')

  const getMaxPrices = (minPrice: number | string) => {
    return minPrice === 'all' ? prices : prices.filter((el) => el >= minPrice)
  }
  let maxPrices: number[] = prices

  useEffect(() => {
    maxPrices = getMaxPrices(minPrice)
  }, [minPrice])

  const initialValues = {
    type: getAsString(query.type!) || 'all',
    country: getAsString(query.country!) || 'all',
    minPrice: getAsString(query.minPrice!) || 'all',
    maxPrice: getAsString(query.maxPrice!) || 'all',
  }

  return (
    <div className={classes.root} data-testid='searchForm'>
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
                    <InputLabel id='search-type'>?????? ????????????</InputLabel>
                    <Field
                      name='type'
                      as={Select}
                      labelId='search-type'
                      label='Type'
                      data-testid='productFieldSelect'
                    >
                      <MenuItem value='all'>
                        <em>???????????????? ??????</em>
                      </MenuItem>
                      {productTypesCount.map((type) => (
                        <MenuItem
                          key={type.type}
                          value={type.type}
                          data-testid='selectOptionsProductTypes'
                        >
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
                      ?????????????????????? ????????
                    </InputLabel>
                    <Field
                      name='minPrice'
                      as={Select}
                      labelId='search-min-price'
                      label='Min price'
                      data-testid='minPriceFieldSelect'
                    >
                      <MenuItem value='all'>
                        <em>???? ??????????????</em>
                      </MenuItem>
                      {prices.map((price) => (
                        <MenuItem
                          key={price}
                          value={price}
                          data-testid='selectOptionsMinPrice'
                        >
                          {price}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={smValue}>
                  <FormControl fullWidth variant='standard'>
                    <InputLabel id='search-max-price'>
                      ???????????????????????? ????????
                    </InputLabel>
                    <Field
                      name='maxPrice'
                      as={Select}
                      labelId='search-max-price'
                      label='Max price'
                      data-testid='maxPriceFieldSelect'
                    >
                      <MenuItem value='all'>
                        <em>???? ??????????????</em>
                      </MenuItem>
                      {maxPrices.map((price) => (
                        <MenuItem
                          key={price}
                          value={price}
                          data-testid='selectOptionsMaxPrice'
                        >
                          {price}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>
                {setMinPrice(values.minPrice)}
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    type='submit'
                    variant='contained'
                    color='primary'
                    data-testid='searchBtn'
                  >
                    ????????????
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
      <InputLabel id='search-country'>????????????</InputLabel>
      <Select
        labelId='search-country'
        label='Country'
        {...field}
        {...props}
        data-testid='countryFieldSelect'
      >
        <MenuItem value='all'>
          <em>???????????????? ??????</em>
        </MenuItem>
        {newCountries.map((country) => (
          <MenuItem
            key={country.country}
            value={country.country}
            data-testid='selectOptionsCountry'
          >
            {`${translateCountry(country.country)} (${country.count})`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

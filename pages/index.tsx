import {
  Grid,
  Paper,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  createStyles,
  makeStyles,
  Button,
  SelectProps,
} from '@material-ui/core'
import { Formik, Form, Field, useField, useFormikContext } from 'formik'
import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from '../components/layout'
import { getTypes, Type } from '../database/getType'
import router, { useRouter } from 'next/router'
import { Country, getCountry } from '../database/getCountry'
import { getAsString } from '../database/getAsString'
import useSWR from 'swr'
import Search from '../components/Search'

export interface HomepageProps {
  types: Type[]
  countries: Country[]
}

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     paper: {
//       margin: 'auto',
//       maxWidth: 500,
//       padding: theme.spacing(3),
//     },
//   })
// )

// const prices = [0, 100, 500, 1000, 5000, 10000]

export default function Homepage({ types, countries }: HomepageProps) {
  // const classes = useStyles()
  // const { query } = useRouter()

  // console.log('query', query)

  // const initialValues = {
  //   type: getAsString(query.type) || 'all',
  //   country: getAsString(query.country) || 'all',
  //   minPrice: getAsString(query.minPrice) || 'all',
  //   maxPrice: getAsString(query.maxPrice) || 'all',
  // }

  return (
    <Layout title="Homepage">
      <Search types={types} countries={countries} />
      {/* <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          router.push(
            {
              pathname: '/',
              query: { ...values, page: 1 },
            },
            undefined,
            { shallow: true }
          )
        }}
      >
        {({ values }) => (
          <Form>
            <Paper elevation={5} className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="search-type">Тип товара</InputLabel>
                    <Field
                      name="type"
                      as={Select}
                      labelId="search-type"
                      label="Type"
                    >
                      <MenuItem value="all">
                        <em>All types</em>
                      </MenuItem>

                      {types.map((type) => (
                        <MenuItem key={type.type} value={type.type}>
                          {`${type.type} (${type.count})`}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <CountrySelect
                    type={values.type}
                    name="country"
                    countries={countries}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="search-min-price">Мин цена</InputLabel>
                    <Field
                      name="minPrice"
                      as={Select}
                      labelId="search-min-price"
                      label="Min price"
                    >
                      <MenuItem value="all">
                        <em>Нет мин</em>
                      </MenuItem>
                      {prices.map((price) => (
                        <MenuItem key={price} value={price}>
                          {price}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="search-max-price">Макс цена</InputLabel>
                    <Field
                      name="maxPrice"
                      as={Select}
                      labelId="search-max-price"
                      label="Max price"
                    >
                      <MenuItem value="all">
                        <em>Нет макс</em>
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
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Искать
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Form>
        )}
      </Formik> */}
      <div>{JSON.stringify(types, null, 4)}</div>
    </Layout>
  )
}

// export interface CountrySelectProps extends SelectProps {
//   name: string
//   countries: Country[]
//   type: string
// }

// export function CountrySelect({
//   countries,
//   type,
//   ...props
// }: CountrySelectProps) {
//   const { setFieldValue } = useFormikContext()
//   const [field] = useField({
//     name: props.name,
//   })

//   const { data } = useSWR<Country[]>('/api/getcountry?type=' + type, {
//     onSuccess: (newValues) => {
//       if (!newValues.map((a) => a.country).includes(field.value)) {
//         setFieldValue('country', 'all')
//       }
//     },
//   })
//   const newCountries = data || countries

//   return (
//     <FormControl fullWidth variant="outlined">
//       <InputLabel id="search-country">Страна</InputLabel>
//       <Select
//         name="country"
//         labelId="search-country"
//         label="Country"
//         {...field}
//         {...props}
//       >
//         <MenuItem value="all">
//           <em>All types</em>
//         </MenuItem>
//         {newCountries.map((country, index) => (
//           <MenuItem key={index} value={country[0]}>
//             {`${country[0]} (${country[1]})`}
//           </MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   )
// }

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const type = getAsString(ctx.query.type)

  const [types, countries] = await Promise.all([getTypes(), getCountry(type)])

  // const types = await getTypes()
  // const countries = await getCountry(type)

  return { props: { types, countries } }
}

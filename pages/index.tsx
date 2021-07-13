import {
  Grid,
  Paper,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from '../components/layout'
import { getTypes, Type } from '../database/getType'
import { useRouter } from 'next/router'
import { IndeterminateCheckBox } from '@material-ui/icons'

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      margin: 'auto',
      maxWidth: 500,
      padding: theme.spacing(3),
    },
  })
)

export interface HomepageProps {
  types: Type[]
}

const prices = [0, 100, 500, 1000, 5000, 10000]

export default function Homepage({ types }: HomepageProps) {
  const classes = useStyles()
  const { query } = useRouter()

  console.log('query', query)

  const initialValues = {
    type: query.type || 'All',
    country: query.country || 'All',
    minPrice: query.minPrice || 'All',
    maxPrice: query.maxPrice || 'All',
  }

  return (
    <Layout title="Homepage">
      <Formik initialValues={initialValues} onSubmit={() => {}}>
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
                      <MenuItem value="All">
                        <em>All types</em>
                      </MenuItem>
                      {types.map((type, index) => (
                        <MenuItem key={index} value={type.type}>
                          {`${type.type} (${type.count})`}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  Страна
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
                      <MenuItem value="All">
                        <em>Нет мин</em>
                      </MenuItem>
                      {prices.map((price, index) => (
                        <MenuItem key={index} value={price}>
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
                      <MenuItem value="All">
                        <em>Нет макс</em>
                      </MenuItem>
                      {prices.map((price, index) => (
                        <MenuItem key={index} value={price}>
                          {price}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>
          </Form>
        )}
      </Formik>
      <div>{JSON.stringify(types, null, 4)}</div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const types = await getTypes()
  return { props: { types } }
}

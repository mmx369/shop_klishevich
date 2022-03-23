import 'react-toastify/dist/ReactToastify.css'
import {
  Box,
  Button,
  Card,
  CardContent,
  FormGroup,
  Grid,
  MenuItem,
  TextField,
} from '@material-ui/core'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import {
  MultipleFileUploadField,
  UploadableFile,
} from '../upload/MultipleFileUploadField'
import React, { useState } from 'react'
import { array, number, object, string } from 'yup'
import axios from 'axios'
import { CATEGORIES } from '../constants/translate_map'
import { COUNTRIES } from '../constants/translate_map'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

export interface NewItemDetails {
  nameOfGoods: string
  amountOfGoods: number | ''
  priceOfGoods: number | ''
  catalogNumber: string
  country: string
  category: string
  files: any
}

const initialValues: NewItemDetails = {
  nameOfGoods: '',
  amountOfGoods: '',
  priceOfGoods: '',
  catalogNumber: '',
  country: '',
  category: '',
  files: [],
}

type TProps = {}

export function AddNewItemForm({}: TProps) {
  const dispatch = useDispatch()
  const [clearState, setClearState] = useState(false)

  const sortedCountryList = Object.entries(COUNTRIES).sort((a, b) => {
    if (a[1] < b[1]) {
      return -1
    }
    if (a[1] > b[1]) {
      return 1
    }
    return 0
  })

  return (
    <>
      <Card>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={object({
              files: array(object({ url: string().required() })),
              nameOfGoods: string().required().min(5).max(100),
              amountOfGoods: number().required().min(0),
              priceOfGoods: number().required().min(0),
              catalogNumber: string().min(2).max(6),
              country: string().required().min(2).max(100),
              category: string().required().min(2).max(100),
            })}
            onSubmit={async (values, { setStatus, resetForm }) => {
              const addNewItem = async () => {
                try {
                  const newItem = {
                    nameOfGoods: values.nameOfGoods,
                    amountOfGoods: Number(values.amountOfGoods),
                    priceOfGoods: Number(values.priceOfGoods),
                    catalogNumber: values.catalogNumber,
                    imageUrl: values.files.map(
                      (file: { url: any }) => file.url
                    ),
                    country: values.country,
                    category: values.category,
                  }

                  const res = await axios.post(
                    `${process.env.RESTURL}/api/addnewitem`,
                    newItem
                  )
                  console.log(3333, res)

                  toast.success(
                    `Товар ${newItem.nameOfGoods} успешно добавлен`,
                    {
                      position: toast.POSITION.TOP_LEFT,
                      autoClose: 5000,
                    }
                  )
                  resetForm({})
                  setStatus({ success: true })
                  setClearState(true)
                } catch (err) {
                  toast.error(`Ошибка: ${err.response.data.message}`, {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 5000,
                  })
                  console.log(err)
                  setStatus({ success: false })
                }
              }
              addNewItem()
              console.log(values)
              console.log('------------')
            }}
          >
            {(values, isSubmitting, isValidating) => (
              <Form>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name='nameOfGoods'
                      as={TextField}
                      label='Наименование товара'
                    />
                    <ErrorMessage name='nameOfGoods' />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name='catalogNumber'
                      as={TextField}
                      label='Номер товара в каталоге'
                    />
                    <ErrorMessage name='catalogNumber' />
                  </FormGroup>
                </Box>

                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name='amountOfGoods'
                      as={TextField}
                      label='Количество товара'
                    />
                    <ErrorMessage name='amountOfGoods' />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name='priceOfGoods'
                      as={TextField}
                      label='Цена товара'
                    />
                    <ErrorMessage name='priceOfGoods' />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field name='country' as={TextField} select label='Страна'>
                      <MenuItem value={''}>Выберите...</MenuItem>

                      {Object.entries(sortedCountryList).map(
                        (country, index) => (
                          <MenuItem key={index} value={country[1][0]}>
                            {country[1][1]}
                          </MenuItem>
                        )
                      )}
                    </Field>
                    <ErrorMessage name='country' />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name='category'
                      as={TextField}
                      select
                      label='Категория'
                    >
                      <MenuItem value={''}>Выберите...</MenuItem>

                      {Object.entries(CATEGORIES).map((el, index) => (
                        <MenuItem key={index} value={el[0]}>
                          {el[1]}
                        </MenuItem>
                      ))}
                    </Field>
                    <ErrorMessage name='category' />
                  </FormGroup>
                </Box>
                <Grid container spacing={2} direction='column'>
                  <MultipleFileUploadField
                    name='files'
                    //@ts-ignore
                    clearState={clearState}
                    setClearState={setClearState}
                  />
                  <Grid item>
                    <Button
                      variant='contained'
                      color='primary'
                      type='submit'
                      disabled={isSubmitting || isValidating}
                    >
                      Добавить
                    </Button>
                  </Grid>
                </Grid>

                <pre>{JSON.stringify(values, null, 4)}</pre>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </>
  )
}

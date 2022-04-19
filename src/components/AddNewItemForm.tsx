import {
  Box,
  Button,
  Card,
  CardContent,
  FormGroup,
  Grid,
  MenuItem,
  TextField,
} from '@mui/material'
import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { array, number, object, string } from 'yup'
import { CATEGORIES, COUNTRIES } from '../constants/translate_map'
import { MultipleFileUploadField } from '../upload/MultipleFileUploadField'

export interface INewItemDetails {
  nameOfGoods: string
  amountOfGoods: number | ''
  priceOfGoods: number | ''
  catalogNumber?: string
  country: string
  category: string
  files: any
}

const initialValues: INewItemDetails = {
  nameOfGoods: '',
  amountOfGoods: '',
  priceOfGoods: '',
  catalogNumber: '',
  country: '',
  category: '',
  files: [],
}

export function AddNewItemForm() {
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
              nameOfGoods: string()
                .required('Наименование товара обязательное поле')
                .min(5, 'Наименование должно содержать более 5 символов')
                .max(
                  100,
                  'Наименование товара должно быть не более 100 символов '
                ),
              amountOfGoods: number()
                .required('Обязательное поле')
                .min(0, 'Количество должно быть положительным'),
              priceOfGoods: number()
                .required('Обязательное поле')
                .min(0, 'Цена должна быть более 0'),
              catalogNumber: string().min(2).max(6),
              country: string()
                .required('Обязательное поле')
                .min(2, 'Минимальное количество символов равно 2')
                .max(100, 'Максимум 100 символов'),
              category: string()
                .required('Обязательное поле')
                .min(2, 'Минимальное количество символов равно 2')
                .max(100, 'Максимум 100 символов'),
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
                      (file: { url: string }) => file.url
                    ),
                    country: values.country,
                    category: values.category,
                  }

                  const res = await axios.post(
                    `${process.env.RESTURL}/api/addnewitem`,
                    newItem
                  )

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
            }}
          >
            {(
              _values: INewItemDetails,
              isSubmitting: boolean,
              isValidating: boolean
            ) => (
              <Form>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name='nameOfGoods'
                      as={TextField}
                      label='Наименование товара'
                    />
                    <ErrorMessage name='nameOfGoods'>
                      {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                    </ErrorMessage>
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name='catalogNumber'
                      as={TextField}
                      label='Номер товара в каталоге'
                    />
                    <ErrorMessage name='catalogNumber'>
                      {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                    </ErrorMessage>
                  </FormGroup>
                </Box>

                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name='amountOfGoods'
                      as={TextField}
                      label='Количество товара'
                    />
                    <ErrorMessage name='amountOfGoods'>
                      {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                    </ErrorMessage>
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name='priceOfGoods'
                      as={TextField}
                      label='Цена товара'
                    />
                    <ErrorMessage name='priceOfGoods'>
                      {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                    </ErrorMessage>
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
                    <ErrorMessage name='country'>
                      {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                    </ErrorMessage>
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
                    <ErrorMessage name='category'>
                      {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                    </ErrorMessage>
                  </FormGroup>
                </Box>
                <Grid container spacing={2} direction='column'>
                  <MultipleFileUploadField
                    name='files'
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
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </>
  )
}

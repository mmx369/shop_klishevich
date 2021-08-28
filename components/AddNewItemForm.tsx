import React, { useEffect, useState } from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import { object, string, number, boolean, array, mixed } from 'yup'
import axios from 'axios'
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
import {
  MultipleFileUploadField,
  UploadableFile,
} from '../upload/MultipleFileUploadField'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export interface NewItemDetails {
  nameOfGoods: string
  amountOfGoods: number
  priceOfGoods: number
  country: string
  category: string
  files: any
}

const initialValues: NewItemDetails = {
  nameOfGoods: '',
  amountOfGoods: 0,
  priceOfGoods: 0,
  country: '',
  category: '',
  files: [],
}

type TProps = {}
export function AddNewItemForm({}: TProps) {
  const dispatch = useDispatch()
  const [clearState, setClearState] = useState(false)

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
            {(values, errors, isSubmitting, isValidating) => (
              <Form>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name="nameOfGoods"
                      as={TextField}
                      label="Наименование товара"
                    />
                    <ErrorMessage name="nameOfGoods" />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name="amountOfGoods"
                      as={TextField}
                      label="Количество товара"
                    />
                    <ErrorMessage name="amountOfGoods" />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name="priceOfGoods"
                      as={TextField}
                      label="Цена товара"
                    />
                    <ErrorMessage name="priceOfGoods" />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field name="country" as={TextField} select label="Страна">
                      <MenuItem value={''}>Выберите...</MenuItem>

                      <MenuItem value={'Russia'}>Россия</MenuItem>
                      <MenuItem value={'USSR'}>CCCР</MenuItem>
                      <MenuItem value={'Tadjikistan'}>Таджикистан</MenuItem>
                    </Field>
                    <ErrorMessage name="country" />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name="category"
                      as={TextField}
                      select
                      label="Категория"
                    >
                      <MenuItem value={''}>Выберите...</MenuItem>

                      <MenuItem value={'Paper Money'}>Банкноты</MenuItem>
                      <MenuItem value={'Coins'}>Монеты</MenuItem>
                      <MenuItem value={'Other'}>Прочие</MenuItem>
                    </Field>
                    <ErrorMessage name="category" />
                  </FormGroup>
                </Box>
                <Grid container spacing={2} direction="column">
                  <MultipleFileUploadField
                    name="files"
                    //@ts-ignore
                    clearState={clearState}
                    setClearState={setClearState}
                  />
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={isSubmitting || isValidating}
                    >
                      Добавить
                    </Button>
                  </Grid>
                </Grid>
                {/* <pre>{JSON.stringify(errors, null, 4)}</pre> */}

                {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </>
  )
}

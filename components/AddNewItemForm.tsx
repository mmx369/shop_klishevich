import React from 'react'
import { Form, Formik, Field, useField, ErrorMessage } from 'formik'
import { object, string, number, boolean, array, mixed } from 'yup'
import axios from 'axios';
import {
  Box,
  Button,
  Card,
  CardContent,
  FormGroup,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core'
import { MultipleFileUploadField } from '../upload/MultipleFileUploadField'

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
export function AddNewItemForm({ }: TProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Добавить новый товар</Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={object({
            files: array(object({ url: string().required() })),
            nameOfGoods:string().required().min(5).max(100),
            amountOfGoods:number().required().min(0),
            priceOfGoods:number().required().min(0),
            country:string().required().min(2).max(100),
            category:string().required().min(2).max(100)
          })}
          onSubmit={(values, {resetForm}, formikHelpers) => {

            const addNewItem = async () => {
              try {
                const newItem = {
                  nameOfGoods: values.nameOfGoods,
                  amountOfGoods: Number(values.amountOfGoods),
                  priceOfGoods: Number(values.priceOfGoods),
                  imageUrl: values.files.map((file)=>file.url),
                  country: values.country,
                  category: values.category,
                }
                console.log('!!!!!!!', newItem);

                const res = await axios.post(
                  `${process.env.RESTURL}/api/addnewitem`,
                  newItem
              );
                  console.log('!!res', res);
                
              } catch (err) {
                console.log(err)
              }

            }
            addNewItem()
            console.log(values)
            console.log(formikHelpers)
            console.log('------------')
            resetForm()
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
              {/* <Box marginBottom={2}>
                <FormGroup>
                  <Field
                    name="imagePath"
                    as={TextField}
                    label="Путь к товару"
                  />
                  <ErrorMessage name="imagePath" />
                </FormGroup>
              </Box> */}
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="country" as={TextField} select label="Страна">
                    <MenuItem value={''}>Выберите...</MenuItem>

                    <MenuItem value={'Россия'}>Россия</MenuItem>
                    <MenuItem value={'CCCР'}>CCCР</MenuItem>
                    <MenuItem value={'Таджикистан'}>Таджикистан</MenuItem>
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

                    <MenuItem value={'Банкноты'}>Банкноты</MenuItem>
                    <MenuItem value={'Монеты'}>Монеты</MenuItem>
                    <MenuItem value={'Прочие'}>Прочие</MenuItem>
                  </Field>
                  <ErrorMessage name="category" />
                </FormGroup>
              </Box>
              <Grid container spacing={2} direction="column">
                <MultipleFileUploadField name="files" />
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
              <pre>{JSON.stringify(errors, null, 4)}</pre>

              <pre>{JSON.stringify(values, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  )
}



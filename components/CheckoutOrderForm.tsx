import {
  Box,
  Button,
  Card,
  CardContent,
  FormGroup,
  TextField,
} from '@material-ui/core'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from '../redux/reducers'
import { object, string } from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'

toast.configure()

export interface CheckoutFields {
  firstName: string
  secondName: string
  fatherName: string
  zip: string
  country: string
  region: string
  city: string
  address: string
  phone: string
  comments: string
}

const initialValues: CheckoutFields = {
  firstName: '',
  secondName: '',
  fatherName: '',
  zip: '',
  country: 'Россия',
  region: '',
  city: '',
  address: '',
  phone: '',
  comments: '',
}

export function CheckoutOrderForm() {
  const router = useRouter()

  const data = useSelector((state: IRootState) => state.cart)
  const currentOrder = data.map(
    ({ imageUrl, date, __v, ...keepAttrs }) => keepAttrs
  )
  let { shippingPrice } = useSelector(
    (state: IRootState) => state.shippingPrice
  )
  if (shippingPrice === null) {
    shippingPrice = +localStorage.getItem('shippingPrice')
    console.log(555, shippingPrice)
  }

  return (
    <>
      <Card>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={object({
              firstName: string()
                .required('Данное поле является обязательным')
                .min(1)
                .max(100),
              secondName: string()
                .required('Данное поле является обязательным')
                .min(1)
                .max(100),
              fatherName: string().min(1).max(100),
              zip: string()
                .required('Данное поле является обязательным')
                .min(1)
                .max(10),
              country: string()
                .required('Данное поле является обязательным')
                .min(1)
                .max(100),
              region: string().min(1).max(100),
              city: string()
                .required('Данное поле является обязательным')
                .min(1)
                .max(100),
              address: string()
                .required('Данное поле является обязательным')
                .min(1)
                .max(100),
              phone: string()
                .required('Данное поле является обязательным')
                .min(10)
                .max(15),
              comments: string().min(1).max(100),
            })}
            onSubmit={async (values, { setStatus, resetForm }) => {
              const addNewOrder = async () => {
                try {
                  const newOrder = {
                    firstName: values.firstName,
                    secondName: values.secondName,
                    fatherName: values.fatherName,
                    zip: values.zip,
                    country: values.country,
                    region: values.region,
                    city: values.city,
                    address: values.address,
                    phone: values.phone,
                    comments: values.comments,
                    order: currentOrder,
                    totalPrice: currentOrder.reduce(function (acc, sum) {
                      return acc + sum.priceOfGoods * sum.amountOfGoods
                    }, 0),
                    shippingPrice,
                  }
                  console.log('!!newOrder!!', newOrder)
                  const res = await axios.post(
                    `${process.env.RESTURL}/api/addneworder`,
                    newOrder
                  )
                  console.log('!!res', res.data.message)
                  window.localStorage.removeItem('cart')
                  toast.success(`Заказ успешно оформлен`, {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 3000,
                  })
                  router.push('/')
                } catch (err) {
                  console.log(err)
                  setStatus({ success: false })
                }
              }
              addNewOrder()
            }}
          >
            {(values, errors, isSubmitting, isValidating) => (
              <Form>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field name='secondName' as={TextField} label='Фамилия' />
                    <ErrorMessage name='secondName' />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field name='firstName' as={TextField} label='Имя' />
                    <ErrorMessage name='firstName' />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name='fatherName'
                      as={TextField}
                      label='Отчество(при наличии)'
                    />
                    <ErrorMessage name='fatherName' />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field name='zip' as={TextField} label='Индекс' />
                    <ErrorMessage name='zip' />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field name='country' as={TextField} label='Страна' />
                    <ErrorMessage name='country' />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name='region'
                      as={TextField}
                      label='Регион(Область, край)'
                    />
                    <ErrorMessage name='region' />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field name='city' as={TextField} label='Город' />
                    <ErrorMessage name='city' />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name='address'
                      as={TextField}
                      label='Адрес(улица, дом, квартира)'
                    />
                    <ErrorMessage name='address' />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field name='phone' as={TextField} label='Телефон' />
                    <ErrorMessage name='phone' />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name='comments'
                      as={TextField}
                      label='Комментарии к заказу'
                    />
                    <ErrorMessage name='comments' />
                  </FormGroup>
                </Box>

                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  disabled={isSubmitting || isValidating}
                >
                  Завершить оформление
                </Button>
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

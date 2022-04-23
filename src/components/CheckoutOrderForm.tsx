import {
  Box,
  Button,
  Card,
  CardContent,
  FormGroup,
  TextField,
} from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { object, string } from 'yup'
import { addShippingPrice } from '../redux/actions/shippingAction'
import { IRootState } from '../redux/reducers'

toast.configure()

const useStyles = makeStyles(() =>
  createStyles({
    errorMsg: {
      color: 'red',
      fontStyle: 'italic',
      fontSize: 'x-small',
    },
    btnWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
  })
)

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
  const classes = useStyles()
  const dispatch = useDispatch()

  const currentOrder = useSelector((state: IRootState) => state.cart)

  let shippingPrice = useSelector(
    (state: IRootState) => state.shippingState.shippingPrice
  )

  useEffect(() => {
    dispatch(addShippingPrice(+window.localStorage.getItem('shippingPrice')!))
  }, [])

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

  return (
    <>
      <Card>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={object({
              firstName: string()
                .required('Поле является обязательным')
                .min(3, 'Имя должно содержать минимум 3 символа')
                .max(100, 'Не более 100 символов'),
              secondName: string()
                .required('Поле является обязательным')
                .max(100, 'Не более 100 символов'),
              fatherName: string().max(100, 'Не более 100 символов'),
              zip: string()
                .required('Данное поле является обязательным')
                .max(10),
              country: string()
                .required('Данное поле является обязательным')
                .max(100),
              region: string().max(100),
              city: string()
                .required('Данное поле является обязательным')
                .max(100),
              address: string()
                .required('Данное поле является обязательным')
                .max(100),
              phone: string()
                .matches(phoneRegExp, 'Номер телефона не валидный')
                .required('Данное поле является обязательным')
                .min(10, 'Не менее 10 символов')
                .max(15, 'Не более 15 символов'),
              comments: string().max(100, 'Не более 100 символов'),
            })}
            onSubmit={async (values, { setStatus }) => {
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
                      return acc + sum.priceOfGoods! * sum.amountOfGoods
                    }, 0),
                    shippingPrice,
                  }
                  const res = await axios.post(
                    `${process.env.RESTURL}/api/addneworder`,
                    newOrder
                  )
                  console.log('!!res', res.data)
                  window.localStorage.removeItem('cart')
                  window.localStorage.removeItem('shippingPrice')
                  toast.success(`Заказ успешно оформлен`, {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 3000,
                  })
                  router.push(`/orders/${res.data.order._id}`)
                } catch (err) {
                  console.log(err)
                  setStatus({ success: false })
                }
              }
              addNewOrder()
            }}
          >
            {(
              _values: { [field: string]: any },
              _errors: { [field: string]: string },
              isSubmitting: boolean,
              isValidating: boolean
            ) => (
              <Form>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field name='secondName' as={TextField} label='Фамилия' />
                    <ErrorMessage name='secondName'>
                      {(msg) => <div className={classes.errorMsg}>{msg}</div>}
                    </ErrorMessage>
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field name='firstName' as={TextField} label='Имя' />
                    <ErrorMessage name='firstName'>
                      {(msg) => <div className={classes.errorMsg}>{msg}</div>}
                    </ErrorMessage>
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name='fatherName'
                      as={TextField}
                      label='Отчество(при наличии)'
                    />
                    <ErrorMessage name='fatherName'>
                      {(msg) => <div className={classes.errorMsg}>{msg}</div>}
                    </ErrorMessage>
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field name='zip' as={TextField} label='Индекс' />
                    <ErrorMessage name='zip'>
                      {(msg) => <div className={classes.errorMsg}>{msg}</div>}
                    </ErrorMessage>
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field name='country' as={TextField} label='Страна' />
                    <ErrorMessage name='country'>
                      {(msg) => <div className={classes.errorMsg}>{msg}</div>}
                    </ErrorMessage>
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name='region'
                      as={TextField}
                      label='Регион(Область, край)'
                    />
                    <ErrorMessage name='region'>
                      {(msg) => <div className={classes.errorMsg}>{msg}</div>}
                    </ErrorMessage>
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field name='city' as={TextField} label='Город' />
                    <ErrorMessage name='city'>
                      {(msg) => <div className={classes.errorMsg}>{msg}</div>}
                    </ErrorMessage>
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name='address'
                      as={TextField}
                      label='Адрес(улица, дом, квартира)'
                    />
                    <ErrorMessage name='address'>
                      {(msg) => <div className={classes.errorMsg}>{msg}</div>}
                    </ErrorMessage>
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field name='phone' as={TextField} label='Телефон' />
                    <ErrorMessage name='phone'>
                      {(msg) => <div className={classes.errorMsg}>{msg}</div>}
                    </ErrorMessage>
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      name='comments'
                      as={TextField}
                      label='Комментарии к заказу'
                    />
                    <ErrorMessage name='comments'>
                      {(msg) => <div className={classes.errorMsg}>{msg}</div>}
                    </ErrorMessage>
                  </FormGroup>
                </Box>
                <div className={classes.btnWrapper}>
                  <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    disabled={isSubmitting || isValidating}
                  >
                    Завершить оформление
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </>
  )
}

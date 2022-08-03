import {
  Box,
  Button,
  Card,
  CardContent,
  FormGroup,
  TextField,
  Typography,
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
import { cartSelectors, shippingSelectors } from '../redux/selectors'
import { CheckoutFields } from '../types/CheckoutFields'

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

  const currentOrder = useSelector(cartSelectors.currentCart)

  let shippingPrice = useSelector(shippingSelectors.shippingPrice)

  useEffect(() => {
    dispatch(addShippingPrice(+window.localStorage.getItem('shippingPrice')!))
  }, [])

  if (!currentOrder || !shippingPrice) {
    return (
      <div>
        <Typography variant='subtitle2'>
          Ваш список покупок пуст или не был выбран способ доставки. Попробуйте
          оформить еще раз.
        </Typography>
      </div>
    )
  }

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

  const handleSubmit = async (values: CheckoutFields) => {
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

    try {
      const result = await axios.post(
        `${process.env.RESTURL}/api/addneworder`,
        newOrder
      )
      window.localStorage.removeItem('cart')
      window.localStorage.removeItem('shippingPrice')
      toast.success(`Заказ успешно оформлен`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      })
      router.push(`/orders/${result.data.order._id}`)
      return result
    } catch (err) {
      console.log(err)
    }
  }

  const sendLetter = async (values: CheckoutFields, orderId: string) => {
    try {
      await axios.post(`${process.env.RESTURL}/api/sendgrid`, {
        fullname: `${values.firstName} ${values.secondName} `,
        orderId,
      })
    } catch (err) {
      if (err.response) {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      } else if (err.request) {
        console.log(err.request)
      } else {
        console.log('Error', err.message)
      }
      console.log(err.config)
    }
  }

  return (
    <>
      <Card data-testid='orderForm'>
        <CardContent>
          <Formik
            validateOnMount
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
            onSubmit={async (values, { setSubmitting }) => {
              const result = await handleSubmit(values)
              console.log(setSubmitting)
              await sendLetter(values, result?.data.order._id)
            }}
          >
            {({ isSubmitting, isValid }) => (
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
                    data-testid='checkoutBtn'
                    disabled={isSubmitting || !isValid}
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

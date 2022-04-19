import { Button, Grid, TextField } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as yup from 'yup'

export type TEditFaqFormProps = {
  id: string
  updateFaqList: () => void
  setToggleVisability: (x: {
    addNewFaq: boolean
    editForm: boolean
    addContentButton: boolean
  }) => void
  answer: string
  question: string
  reloadFaqForm: boolean
}

export const EditFaqForm = ({
  id,
  updateFaqList,
  setToggleVisability,
  reloadFaqForm,
}: TEditFaqFormProps) => {
  const router = useRouter()

  const validationSchema = yup.object({
    question: yup
      .string()
      .min(5, 'Вопрос должен содержать минимум 5 символов')
      .max(1000, 'Вопрос должен содержать не более 1000 символов')
      .required('Поле обязательно'),
    answer: yup
      .string()
      .min(3, 'Ответ должен содержать минимум 3 символа')
      .max(1000, 'Ответ должен содержать не более 1000 символов')
      .required('Поле обязательно'),
  })

  const [initialValues, setInitialValues] = useState({
    question: '',
    answer: '',
  })

  useEffect(() => {
    axios
      .get(`${process.env.RESTURL}/api/getfaqdata?id=${id}`)
      .then(({ data }) => {
        setInitialValues({
          question: data.question || '',
          answer: data.answer || '',
        })
      })
      .catch((err) => console.log(err))
  }, [reloadFaqForm])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const updateFaqHandler = async () => {
        try {
          const updateFaq = {
            answer: values.answer,
            question: values.question,
            id,
          }

          const res = await axios.put(
            `${process.env.RESTURL}/api/updatefaq`,
            updateFaq
          )

          if (res.status === 200) {
            toast.success('Запись успешна изменена', {
              position: toast.POSITION.TOP_LEFT,
              autoClose: 5000,
            })
            updateFaqList()
            setToggleVisability({
              addNewFaq: false,
              editForm: false,
              addContentButton: true,
            })
          }
        } catch (e) {
          toast.error(`Ошибка: ${e.response.data.message}`, {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 5000,
          })
          console.log(e)
        }
      }
      updateFaqHandler()
    },
  })

  const deleteFaqHandler = async () => {
    try {
      await axios.delete(`${process.env.RESTURL}/api/deletefaq`, {
        data: id,
      })
      toast.success('Запись успешна удалена', {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      })
      setToggleVisability({
        addNewFaq: false,
        editForm: false,
        addContentButton: true,
      })
      router.replace(router.asPath)
    } catch (e) {
      toast.error(`Ошибка: ${e.response.data.message}`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      })
      console.error(e)
    }
  }

  const cancelEditFaq = () => {
    setToggleVisability({
      addNewFaq: false,
      editForm: false,
      addContentButton: true,
    })
  }

  return (
    <Grid container direction='column'>
      <Grid item sx={{ textAlign: 'center' }}>
        <div>
          <h3>Отредактируйте вопрос или ответ</h3>
        </div>
      </Grid>
      <form onSubmit={formik.handleSubmit}>
        <Grid item>
          <TextField
            multiline
            rows={4}
            id='question'
            name='question'
            label='Вопрос'
            type='text'
            value={formik.values.question}
            onChange={formik.handleChange}
            error={formik.touched.question && Boolean(formik.errors.question)}
            helperText={formik.touched.question && formik.errors.question}
            variant='filled'
            margin='none'
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            multiline
            rows={4}
            id='answer'
            name='answer'
            label='Ответ'
            value={formik.values.answer}
            onChange={formik.handleChange}
            error={formik.touched.answer && Boolean(formik.errors.answer)}
            helperText={formik.touched.answer && formik.errors.answer}
            variant='filled'
            margin='none'
            fullWidth
          />
        </Grid>
        <Grid item sx={{ marginBottom: '5px' }}>
          <Button variant='outlined' color='secondary' fullWidth type='submit'>
            Сохранить
          </Button>
        </Grid>
      </form>
      <Grid item sx={{ marginBottom: '5px' }}>
        <Button
          variant='outlined'
          color='secondary'
          onClick={cancelEditFaq}
          fullWidth
        >
          Отменить
        </Button>
      </Grid>
      <Grid item sx={{ marginBottom: '5px' }}>
        <Button
          variant='outlined'
          color='secondary'
          fullWidth
          onClick={deleteFaqHandler}
        >
          Удалить запись
        </Button>
      </Grid>
    </Grid>
  )
}

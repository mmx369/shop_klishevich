import { Button, Grid, TextField } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as yup from 'yup'

toast.configure()

export type TFormFaqFields = {
  question: string
  answer: string
}

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

const initialValues: TFormFaqFields = {
  question: '',
  answer: '',
}

type TProps = {
  setToggleVisability: (x: {
    addNewFaq: false
    editForm: false
    addContentButton: true
  }) => void
}

export const AddNewFaqForm = ({ setToggleVisability }: TProps) => {
  const router = useRouter()

  const formik = useFormik({
    initialValues,

    validationSchema,
    onSubmit: async (values) => {
      const addNewFaq = async () => {
        try {
          const addNewFaq = {
            question: values.question,
            answer: values.answer,
          }
          await axios.post(`${process.env.RESTURL}/api/addnewfaq`, addNewFaq)

          toast.success('Новая запись успешна добавлена', {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 5000,
          })
          router.replace(router.asPath)
          setToggleVisability({
            addNewFaq: false,
            editForm: false,
            addContentButton: true,
          })
        } catch (e) {
          toast.error(`Ошибка: ${e.response.data.message}`, {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 5000,
          })
          console.error(e)
        }
      }
      addNewFaq()
    },
  })

  const cancelAddUser = () => {
    setToggleVisability({
      addNewFaq: false,
      editForm: false,
      addContentButton: true,
    })
  }

  return (
    <div>
      <Grid container direction='column'>
        <Grid item>
          <h3 style={{ textAlign: 'center' }}>Новый вопрос-ответ</h3>
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
          <Grid item>
            <Button
              sx={{ margin: '5px' }}
              variant='outlined'
              color='secondary'
              type='submit'
            >
              Сохранить
            </Button>
            <Button
              sx={{ margin: '5px' }}
              variant='outlined'
              color='secondary'
              onClick={cancelAddUser}
            >
              Отменить
            </Button>
          </Grid>
        </form>
      </Grid>
    </div>
  )
}

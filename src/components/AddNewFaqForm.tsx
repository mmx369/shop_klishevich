import React, { useState } from 'react'
import axios from 'axios'
import { Button, Grid, TextareaAutosize } from '@material-ui/core'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export const AddNewFaqForm = () => {
  const router = useRouter()

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const changeHandlerQuestion = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setQuestion(event.target.value as string)
  }

  const changeHandlerAnswer = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAnswer(event.target.value as string)
  }

  const addNewFaq = async () => {
    try {
      const addNewFaq = {
        question,
        answer,
      }
      await axios.post(`${process.env['RESTURL']}/api/addnewfaq`, addNewFaq)

      toast.success('Новая запись успешна добавлена', {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      })
      setQuestion('')
      setAnswer('')
      router.replace(router.asPath)
    } catch (e) {
      toast.error(`Ошибка: ${e.response.data.message}`, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      })
      console.error(e)
    }
  }

  return (
    <React.Fragment>
      <div>
        <Grid container direction='column'>
          <Grid item>
            <div>
              <h3>Новая запись вопросы и ответы</h3>
            </div>
          </Grid>
          <div>
            <Grid item>
              <TextareaAutosize
                onChange={changeHandlerQuestion}
                minRows={4}
                maxRows={30}
                aria-label='Вопрос'
                placeholder='Введите ваш вопрос...'
                value={question}
              />
            </Grid>
          </div>
          <div>
            <Grid item>
              <TextareaAutosize
                onChange={changeHandlerAnswer}
                minRows={4}
                maxRows={30}
                aria-label='Ответ'
                placeholder='Введите ваш ответ...'
                value={answer}
              />
            </Grid>
          </div>

          <Grid item>
            <Button variant='outlined' color='secondary' onClick={addNewFaq}>
              Сохранить
            </Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

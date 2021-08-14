import React, { useState } from 'react'
import axios from 'axios'
import { Button, Grid, TextareaAutosize } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { createNewMsg } from '../redux/actions/notificationActions'
import { useRouter } from 'next/router'

export const AddNewFaqForm = () => {
  const router = useRouter()
  const dispatch = useDispatch()

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

      const res = await axios.post(
        `${process.env.RESTURL}/api/addnewfaq`,
        addNewFaq
      )
      dispatch(
        createNewMsg({
          message: `Новая запись успешно добавлена`,
          msgType: 'success',
        })
      )
      setTimeout(() => {
        dispatch(createNewMsg([]))
      }, 4000)
      setQuestion('')
      setAnswer('')
      router.replace(router.asPath)
    } catch (e) {
      dispatch(
        createNewMsg({
          message: e.response.data.message,
          msgType: 'error',
        })
      )
      setTimeout(() => {
        dispatch(createNewMsg([]))
      }, 4000)
      console.error(e)
    }
  }

  return (
    <React.Fragment>
      <div>
        <Grid container direction="column">
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
                aria-label="Вопрос"
                placeholder="Введите ваш вопрос..."
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
                aria-label="Ответ"
                placeholder="Введите ваш ответ..."
                value={answer}
              />
            </Grid>
          </div>

          <Grid item>
            <Button variant="outlined" color="secondary" onClick={addNewFaq}>
              Сохранить
            </Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

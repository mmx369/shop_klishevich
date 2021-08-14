import React, { useState } from 'react'
import axios from 'axios'
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  TextareaAutosize,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { createNewMsg } from '../redux/actions/notificationActions'

export interface EditFaqFormProps {
  id: string
  updateFaqList: Function
  changeVisibility: Function
  answer: string
  question: string
}

export const EditFaqForm = ({
  id,
  updateFaqList,
  changeVisibility,
  answer,
  question,
}: EditFaqFormProps) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [newQuestion, setNewQuestion] = useState('')
  const [newAnswer, setNewAnswer] = useState('')

  const changeHandlerQuestion = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setNewQuestion(event.target.value as string)
  }
  const changeHandlerAnswer = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setNewAnswer(event.target.value as string)
  }

  const deleteHandler = async () => {
    try {
      await axios.delete(`${process.env.RESTURL}/api/deletefaq`, {
        data: id,
      })
      dispatch(
        createNewMsg({
          message: `Запись успешно удалена`,
          msgType: 'success',
        })
      )
      setTimeout(() => {
        dispatch(createNewMsg([]))
      }, 4000)
      router.replace(router.asPath)
    } catch (e) {
      console.error(e)
    }
  }

  const updateHandler = async () => {
    try {
      const updateFaq = {
        answer: newAnswer,
        question: newQuestion,
        id,
      }
      console.log(333, updateFaq)

      const res = await axios.put(
        `${process.env.RESTURL}/api/updatefaq`,
        updateFaq
      )
      if (res.status === 200) {
        updateFaqList()
        setNewQuestion('')
        setNewAnswer('')
        changeVisibility()
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <React.Fragment>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <div>
            <h4>Отредактируйте вопрос или ответ</h4>
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
              defaultValue={question}
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
              defaultValue={answer}
            />
          </Grid>
        </div>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={updateHandler}
          >
            Сохранить изменения
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={deleteHandler}
          >
            Удалить запись
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

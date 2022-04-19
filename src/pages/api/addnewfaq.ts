import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import * as yup from 'yup'
import { dbConnect } from '../../db/dbConnect'
import Faq from '../../models/shopFaq'
import { ERole } from '../../types/ERole'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()

  const session = await getSession({ req })

  if (!session) {
    res.send({
      error: 'Вы не авторизованы',
    })
    return
  }

  if (session.role !== ERole.Admin) {
    res.send({
      error: 'Вы должны быть администратором ',
    })
    return
  }

  if (req.method === 'POST') {
    let schema = yup.object().shape({
      question: yup.string().min(5).max(1000).required(),
      answer: yup.string().min(3).max(1000).required(),
    })

    try {
      const isValid = await schema.isValid(req.body)
      if (!isValid) {
        return res.status(400).send({
          message: `Введены не полные или не корректные данные`,
        })
      }

      const { answer, question } = req.body
      const newFaq = new Faq({
        question,
        answer,
        date: new Date(),
      })

      const response = await newFaq.save()

      return res
        .status(201)
        .json({ message: 'Запись добавлена', user: response.toJSON() })
    } catch (err) {
      return res.status(500).send(err.message)
    }
  } else {
    res.status(422).send('Request method not supported')
  }
}

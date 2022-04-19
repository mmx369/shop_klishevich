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
      error: 'Вы должны быть администратором',
    })
    return
  }

  if (req.method === 'PUT') {
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
      const { id, question, answer } = req.body

      const updateFaqInfo = await Faq.findByIdAndUpdate(
        id,
        {
          question,
          answer,
        },
        { new: true }
      )

      return res.json(updateFaqInfo)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  } else {
    res.status(422).send('req_method_not_supported')
  }
}

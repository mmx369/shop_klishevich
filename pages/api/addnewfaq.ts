import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../db/connectDb'
import { getSession } from 'next-auth/client'
import { ERole } from '../../types/ERole'
import Faq from '../../models/shopFaq'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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
    try {
      const { answer, question } = req.body

      const newFaq = new Faq({
        question,
        answer,
        date: new Date(),
      })

      const response = await newFaq.save()
      console.log(1111, response)

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

export default connectDB(handler)

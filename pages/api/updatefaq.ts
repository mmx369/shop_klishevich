import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import connectDB from '../../db/connectDb'
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
      error: 'Вы должны быть администратором',
    })
    return
  }

  if (req.method === 'PUT') {
    try {
      const { id, question, answer } = req.body
      console.log(id, question, answer)

      if (!question && !answer) {
        return res
          .status(400)
          .send({ message: 'Должно быть заполнено хотя бы одно поле' })
      } else if (!question) {
        const updateFaqInfo = await Faq.findByIdAndUpdate(
          id,
          { answer },
          { new: true }
        )
        return res.json(updateFaqInfo)
      } else if (!answer) {
        const updateFaqInfo = await Faq.findByIdAndUpdate(
          id,
          { question },
          { new: true }
        )
        return res.json(updateFaqInfo)
      } else {
        const updateFaqInfo = await Faq.findByIdAndUpdate(
          id,
          { question, answer },
          { new: true }
        )
        return res.json(updateFaqInfo)
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  } else {
    res.status(422).send('req_method_not_supported')
  }
}

export default connectDB(handler)

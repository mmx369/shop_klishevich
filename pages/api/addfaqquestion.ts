import { NextApiRequest, NextApiResponse } from 'next'
import Faq from '../../models/shopFaq'
import connectDB from '../../db/connectDb'
import { getSession } from 'next-auth/client'
import { ERole } from '../../types/ERole'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //   const session = await getSession({ req })

  //   if (!session) {
  //     res.send({
  //       error: 'You must be authorized',
  //     })
  //     return
  //   }

  //   if (session.role !== ERole.Admin) {
  //     res.send({
  //       error: 'You need to be an admin ',
  //     })
  //     return
  //   }

  if (req.method === 'POST') {
    try {
      const { answer, question } = req.body

      const newFaq = new Faq({
        answer,
        question,
        date: new Date(),
      })

      const response = await newFaq.save()

      return res
        .status(201)
        .json({ message: 'New faq added', user: response.toJSON() })
    } catch (err) {
      return res.status(500).send(err.message)
    }
  } else {
    res.status(422).send('Request method not supported')
  }
}

export default connectDB(handler)

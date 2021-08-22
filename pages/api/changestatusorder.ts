import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import connectDB from '../../db/connectDb'
import NewOrder from '../../models/newOrder'
import { ERole } from '../../types/ERole'

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
      const { id, status } = req.body
      const newStatusInfo = await NewOrder.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      )
      return res.json(newStatusInfo)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  } else {
    res.status(422).send('req_method_not_supported')
  }
}

export default connectDB(handler)

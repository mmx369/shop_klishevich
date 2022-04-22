import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { dbConnect } from '../../db/dbConnect'
import User from '../../models/shopUser'
import { ERole } from '../../types/ERole'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()
  const session = await getSession({ req })
  if (!session) {
    res.send({
      error: 'Вы должны быть авторизованы',
    })
    return
  }

  if (session.role !== ERole.Admin) {
    res.send({
      error: 'Вы должны быть администратором',
    })
    return
  }

  if (req.method === 'DELETE') {
    try {
      const id = req.body
      await User.deleteOne({ _id: id })
      res.send({
        message: 'Пользователь удален',
      })
      return
    } catch (error) {
      return res.status(500).send(error.message)
    }
  } else {
    res.status(422).send('req_method_not_supported')
  }
}

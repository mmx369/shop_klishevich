import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { dbConnect } from '../../db/dbConnect'
import ShopUser from '../../models/shopUser'
import { ERole } from '../../types/ERole'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  if (!session) {
    res.send({
      error: 'Вы должны быть авторизованы.',
    })
    return
  }

  if (session.role !== ERole.Admin) {
    res.send({
      error: 'Вы должны быть администратором.',
    })
    return
  }

  await dbConnect()

  if (req.method === 'GET') {
    try {
      await dbConnect()
      const userData = await ShopUser.findById(req.query.id).select(
        '-orders -date -__v -cart'
      )
      return res.json(userData)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  } else {
    res.status(422).send('Request method not supported')
  }
}

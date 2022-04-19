import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import * as yup from 'yup'
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
      error: 'Вы должны иметь права администратора',
    })
    return
  }

  await dbConnect()

  if (req.method === 'PUT') {
    let schema = yup.object().shape({
      username: yup.string().min(3).max(40).required(),
      email: yup.string().email().required(),
      role: yup.string().required(),
    })

    try {
      const isValid = await schema.isValid(req.body)
      if (!isValid) {
        return res.status(400).send({
          message: `Введены не полные или не корректные данные`,
        })
      }

      const { id, username, role, email } = req.body
      const updateUserInfo = await ShopUser.findByIdAndUpdate(
        id,
        {
          name: username,
          email,
          role,
        },
        { new: true }
      )
      return res.json(updateUserInfo)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  } else {
    res.status(422).send('req_method_not_supported')
  }
}

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
      error: 'Вы должны быть администратором.',
    })
    return
  }

  await dbConnect()

  if (req.method === 'POST') {
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

      const { username, email, role } = req.body
      const findUser = await ShopUser.findOne({ email })

      if (findUser) {
        return res.status(400).send({
          message: `Пользователь с ${email} уже существует.`,
        })
      }

      const newShopUser = new ShopUser({
        name: username,
        email,
        role,
        date: new Date(),
      })

      const response = await newShopUser.save()

      return res.status(201).json({
        message: 'Новый пользователь добавлен',
        user: response.toJSON(),
      })
    } catch (err) {
      return res.status(500).send(err.message)
    }
  } else {
    res.status(422).send('Request method not supported')
  }
}

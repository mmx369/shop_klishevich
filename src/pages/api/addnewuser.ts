import { NextApiRequest, NextApiResponse } from 'next'
import ShopUser from '../../models/shopUser'
import { dbConnect } from '../../db/dbConnect'
import { getSession } from 'next-auth/client'
import { ERole } from '../../types/ERole'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()
  const session = await getSession({ req })

  if (!session) {
    res.send({
      error: 'You must be authorized',
    })
    return
  }

  if (session.role !== ERole.Admin) {
    res.send({
      error: 'You need to be an admin ',
    })
    return
  }

  if (req.method === 'POST') {
    try {
      const { name, email, role } = req.body

      const findUser = await ShopUser.findOne({ email: email })

      if (findUser) {
        return res.status(400).send({
          message: `${email} already exist. E-mail must be unique`,
        })
      }

      const newShopUser = new ShopUser({
        name,
        email,
        role,
        date: new Date(),
      })

      const response = await newShopUser.save()
      console.log(1111, response)

      return res
        .status(201)
        .json({ message: 'New user added', user: response.toJSON() })
    } catch (err) {
      return res.status(500).send(err.message)
    }
  } else {
    res.status(422).send('Request method not supported')
  }
}

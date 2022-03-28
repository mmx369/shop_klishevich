import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import User from '../../models/shopUser'
import { dbConnect } from '../../db/dbConnect'
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
      error: 'You need to be an admin',
    })
    return
  }

  if (req.method === 'PUT') {
    try {
      const { id, name, role, email } = req.body
      console.log(id, name, role, email)

      if (!name && !role && !email) {
        return res
          .status(400)
          .send({ message: 'Должно быть заполнено хотя бы одно поле' })
      } else if (!name && !role) {
        const updateUserInfo = await User.findByIdAndUpdate(
          id,
          { email },
          { new: true }
        )
        return res.json(updateUserInfo)
      } else if (!name && !email) {
        const updateUserInfo = await User.findByIdAndUpdate(
          id,
          { role },
          { new: true }
        )
        return res.json(updateUserInfo)
      } else if (!role && !email) {
        const updateUserInfo = await User.findByIdAndUpdate(
          id,
          { name },
          { new: true }
        )
        return res.json(updateUserInfo)
      } else if (!name) {
        const updateUserInfo = await User.findByIdAndUpdate(
          id,
          { role, email },
          { new: true }
        )
        return res.json(updateUserInfo)
      } else if (!role) {
        const updateUserInfo = await User.findByIdAndUpdate(
          id,
          { name, email },
          { new: true }
        )
        return res.json(updateUserInfo)
      } else if (!email) {
        const updateUserInfo = await User.findByIdAndUpdate(
          id,
          { name, role },
          { new: true }
        )
        return res.json(updateUserInfo)
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  } else {
    res.status(422).send('req_method_not_supported')
  }
}

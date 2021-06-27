import { NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcrypt'
import User from '../../models/User'
import connectDB from '../../connectDb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { name, email, password } = req.body

      const findUser = await User.findOne({ email: email })

      if (findUser) {
        return res.status(400).send({
          message: `${email} already exist. E-mail must be unique`,
        })
      }

      hash(password, 10, async function (err, hash) {
        // Store hash in your password DB.
        const newUser = new User({
          name,
          email,
          passwordHash: hash,
          date: new Date(),
        })
        const response = await newUser.save()
        console.log(1111, response)
        return res
          .status(201)
          .json({ message: 'New user added', user: response.toJSON() })
      })
    } catch (err) {
      return res.status(500).send(err.message)
    }
  } else {
    res.status(422).send('Request method not supported')
  }
}

export default connectDB(handler)

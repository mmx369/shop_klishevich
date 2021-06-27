import { NextApiRequest, NextApiResponse } from 'next'
import { compare } from 'bcrypt'
import User from '../../models/User'
import connectDB from '../../connectDb'
import { sign } from 'jsonwebtoken'
import cookie from 'cookie'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const person = await User.findOne({ email: req.body.email })
      compare(req.body.password, person.passwordHash, function (err, result) {
        if (!err && result) {
          const claims = { id: person._id, email: person.email }
          const jwt = sign(claims, process.env.SECRET, { expiresIn: '1h' })
          res.setHeader(
            'Set-Cookie',
            cookie.serialize('auth', jwt, {
              httpOnly: true,
              secure: process.env.NODE_ENV !== 'development',
              sameSite: true,
              maxAge: 3600,
              path: '/',
            })
          )
          res.json({ message: 'Welcome back to the app' })
        } else {
          res.json({ message: 'Ups something went wrong!' })
        }
      })
    } catch (err) {
      return res.status(500).send(err.message)
    }
  } else {
    res.status(422).send('Request method not supported')
  }
}

export default connectDB(handler)

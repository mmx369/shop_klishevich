import { NextApiRequest, NextApiResponse } from 'next'
import User from '../../models/User'
import { authenticated } from '../../middleware/auth'
import connectDB from '../../connectDb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const users = await User.find({})
      res.json(users)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  } else {
    res.status(422).send('Requested method not supported')
  }
}
export default connectDB(authenticated(handler))

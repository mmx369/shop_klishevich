import { getSession } from 'next-auth/client'
import { ERole } from '../../types/ERole'

const cloudinary = require('cloudinary').v2

export default async (req: any, res: any) => {
  const session = await getSession({ req })

  console.log('!!!!session', session)

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

  if (req.method === 'GET') {
    try {
      const timestamp = Math.round(new Date().getTime() / 1000)

      const signature = cloudinary.utils.api_sign_request(
        {
          timestamp: timestamp,
        },
        process.env.CLOUDINARY_SECRET_KEY
      )

      res.statusCode = 200
      res.json({ signature, timestamp })
    } catch (err) {
      return res.status(500).send(err.message)
    }
  } else {
    res.status(422).send('Request method not supported')
  }
}

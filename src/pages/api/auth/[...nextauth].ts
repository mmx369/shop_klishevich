import NextAuth, { User } from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiRequest, NextApiResponse } from 'next'
import { TUserSession } from '../../../types/userSession'
import ShopUser from '../../../models/shopUser'
import { dbConnect } from '../../../db/dbConnect'

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: 587,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: process.env.MONGODB_URI,
  pages: { signIn: '/signin' },

  callbacks: {
    async signIn(user: User, _account: any, _profile: any) {
      await dbConnect()
      try {
        const candidate = await ShopUser.findOne({
          email: user.email as string,
        })

        if (!candidate) {
          const newShopUser = new ShopUser({
            email: user.email,
            name: user.name,
            image: user.image,
            date: new Date(),
          })
          await newShopUser.save()
          console.log('New user added')
          return
        }

        return
      } catch (e) {
        console.error(e)
      }

      const isAllowedToSignIn = true

      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },

    async session(session: TUserSession, _token: any) {
      await dbConnect()
      if (session) {
        try {
          const { email } = session.user
          const shopUser = await ShopUser.findOne({ email })
          if (!shopUser) {
            throw new Error('User not found')
          }
          session.databaseId = shopUser._id
          session.role = shopUser.role
        } catch (error) {
          console.error(error)
        }
      }
      session.someInfo = 'testing'
      return session
    },
  },
} as any

export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, options)
}

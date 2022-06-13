import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { Account, Profile, TokenSet, User } from 'next-auth'
import Providers, { EmailConfig } from 'next-auth/providers'
import nodemailer from 'nodemailer'
import { dbConnect } from '../../../db/dbConnect'
import ShopUser from '../../../models/shopUser'
import { TUserSession } from '../../../types/userSession'

interface ICustomVerificationRequest {
  identifier: string
  url: string
  provider: EmailConfig
}

const customVerificationRequest = async ({
  identifier: email,
  url,
  provider: { server, from },
}: ICustomVerificationRequest) => {
  const { host } = new URL(url)
  const transport = nodemailer.createTransport(server)
  await transport.sendMail({
    to: email,
    from,
    subject: `Войти на сайт ${host}`,
    text: text({ url, host }),
    html: html({ url, host, email }),
  })
}

const html = ({
  url,
  host,
  email,
}: Record<'url' | 'host' | 'email', string>) => {
  const escapedEmail = `${email.replace(/\./g, '&#8203;.')}`
  const escapedSite = `${host.replace(/\./g, '&#8203;.')}`
  const backgroundColor = '#f9f9f9'
  const textColor = '#444444'
  const mainBackgroundColor = '#ffffff'
  const buttonBackgroundColor = '#346df1'
  const buttonBorderColor = '#346df1'
  const buttonTextColor = '#ffffff'
  return `
    <body style="background: ${backgroundColor};">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
            <strong>${escapedSite}</strong>
          </td>
        </tr>
      </table>
      <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
        <tr>
          <td align="center" style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
            Войти как <strong>${escapedEmail}</strong>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 20px 0;">
            <table border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}"><a href="${url}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; text-decoration: none;border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">Войти</a></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
          Если вы не запрашивали это письмо, то вы можете проигнорировать его.  
          </td>
        </tr>
      </table>
    </body>`
}

const text = ({ url, host }: Record<'url' | 'host', string>) =>
  `Войти на ${host}\n${url}\n\n`

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Providers.Facebook({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
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
      sendVerificationRequest: customVerificationRequest,
    }),
  ],
  database: process.env.MONGO_URI,
  pages: { signIn: '/signin', verifyRequest: '/verify-request' },

  callbacks: {
    async signIn(user: User, _account: Account, _profile: Profile) {
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

    async session(session: TUserSession, _token: TokenSet) {
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

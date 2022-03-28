import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { dbConnect } from '../../db/dbConnect'
import ShopUser from '../../models/shopUser'

export default async function getItemById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()
  const session = await getSession({ req })
  if (!session) {
    return
  }
  const userCart = await ShopUser.find({ email: session.user!.email as string })

  return res.json(userCart[0]!.cart)
}

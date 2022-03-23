import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { dbConnect } from '../../db/dbConnect'
import ShopGoods from '../../models/shopGoods'
import ShopUser from '../../models/shopUser'

export default async function getItemById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()
  const session = await getSession({ req })
  const userCart = await ShopUser.find({ email: session.user.email })

  console.log(2222, userCart)

  return res.json(userCart[0].cart)
}

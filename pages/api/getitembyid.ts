import { NextApiRequest, NextApiResponse } from 'next'
import { connectDB } from '../../db/connect'
// import connectDB from '../../db/connectDb'
import ShopGoods from '../../models/shopGoods'

export default async function getItemById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB()
  const item = await ShopGoods.findById(req.query.id).exec()
  return res.json(item)
}

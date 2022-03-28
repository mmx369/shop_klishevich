import { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '../../db/dbConnect'
import ShopGoods from '../../models/shopGoods'

export default async function getItemById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()
  const item = await ShopGoods.findById(req.query.id).select('-date -__v')
  return res.json(item)
}

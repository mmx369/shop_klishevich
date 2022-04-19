import { NextApiRequest, NextApiResponse } from 'next'
import { getPaginatedItem } from '../../lib/getPaginatedItems'

export default async function shop(req: NextApiRequest, res: NextApiResponse) {
  //@ts-ignore
  const shop = await getPaginatedItem(req.query)
  res.json(shop)
}

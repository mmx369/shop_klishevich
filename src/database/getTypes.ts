import { dbConnect } from '../db/dbConnect'
import ShopGoods from '../models/shopGoods'

export interface Type {
  type: string
  count: number
}

export async function getTypes() {
  await dbConnect()
  const countTypeBanknote = await (
    await ShopGoods.find({ category: 'Paper Money' })
  ).length
  const countTypeCoin = await (
    await ShopGoods.find({ category: 'Coins' })
  ).length
  const countTypeOther = await (
    await ShopGoods.find({ category: 'Other' })
  ).length
  return [
    { type: 'Paper Money', count: countTypeBanknote },
    { type: 'Coins', count: countTypeCoin },
    { type: 'Other', count: countTypeOther },
  ]
}

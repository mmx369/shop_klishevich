import { connectDB } from '../db/connect'
import ShopGoods from '../models/shopGoods'

export async function getItemById(id) {
  await connectDB()
  console.log(id)
  const item = await ShopGoods.findById(id).exec()
  console.log(item)
  return item
}

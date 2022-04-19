import { dbConnect } from '../db/dbConnect'
import ShopGoods from '../models/shopGoods'

export interface IProductTypesCount {
  type: string
  count: number
}

export async function getTypesCount(productTypes: string[]) {
  await dbConnect()
  const promises = productTypes.map((type) =>
    ShopGoods.countDocuments({
      category: type,
    })
  )
  const res = await Promise.all(promises)
  const productTypesCount: IProductTypesCount[] = []

  productTypes.forEach((product, i) => {
    productTypesCount.push({ type: product, count: res[i]! })
  })

  return productTypesCount
}

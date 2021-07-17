import { connectDB } from '../db/connect'
import ShopGoods from '../models/shopGoods'

export interface Country {
  country: string
  count: number
}

export async function getCountry(type: string) {
  await connectDB()

  const countries = await ShopGoods.find({ category: type })

  const res = countries.reduce((acc, curr) => {
    const currCountry = curr.country
    if (acc[currCountry]) {
      acc[currCountry] += 1
    } else {
      acc[currCountry] = 1
    }
    return acc
  }, {})

  const resToArr = Object.entries(res)
  return resToArr
}

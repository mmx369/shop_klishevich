import { connectDB } from '../db/connect'
import ShopGoods from '../models/shopGoods'

export interface Country {
  country: string
  count: number
}

export async function getCountry(type: string) {
  await connectDB()
  console.log(222222, type)

  const countries = await ShopGoods.find({ category: type })
  console.log(3333, countries)

  const res = countries.reduce((acc, curr) => {
    const currCountry = curr.country
    if (acc[currCountry]) {
      acc[currCountry] += 1
    } else {
      acc[currCountry] = 1
    }
    return acc
  }, {})

  console.log(55555, res)
  const resToArr = Object.entries(res)
  console.log(6666, resToArr)
  return resToArr
}

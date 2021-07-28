import { connectDB } from '../db/connect'
import ShopGoods from '../models/shopGoods'

export interface Country {
  country: string
  count: number
}

export async function getCountry(type: string) {
  // await connectDB()

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

  console.log(1111, res)

  //{Russia:4, USSR:3}

  //[{type:"Russia",count:4 }, {type:"USSR", count:3}]

  const arrOfObj = []

  for (let [key, value] of Object.entries(res)) {
    arrOfObj.push({ country: key, count: value })
    // console.log(key, value)
  }
  console.log(2222, arrOfObj)

  // const resToArr = Object.entries(res)
  return arrOfObj
}

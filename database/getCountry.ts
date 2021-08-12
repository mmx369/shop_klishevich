import ShopGoods from '../models/shopGoods'

export interface Country {
  country: string
  count: number
}

export async function getCountry(type: string) {
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

  const arrOfObj = []

  for (let [key, value] of Object.entries(res)) {
    arrOfObj.push({ country: key, count: value })
  }
  return arrOfObj
}

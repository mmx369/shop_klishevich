import ShopGoods from '../models/shopGoods'

export interface ICountryCount {
  country: string
  count: number
}

export async function getCountry(productType: string) {
  const countries: { country: string }[] = await ShopGoods.find({
    category: productType,
  }).select('country -_id')

  const res = countries.reduce((acc: { [key: string]: number }, curr) => {
    const currCountry = curr.country
    if (acc[currCountry]) {
      acc[currCountry] += 1
    } else {
      acc[currCountry] = 1
    }
    return acc
  }, {})

  const listOfCountriesCount: ICountryCount[] = []

  for (let [key, value] of Object.entries(res)) {
    listOfCountriesCount.push({ country: key, count: value })
  }

  return listOfCountriesCount
}

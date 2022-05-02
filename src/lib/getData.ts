import { dbApi } from '../db/dbApi'

export interface IProductTypesCount {
  type: string
  count: number
}

export interface ICountryCount {
  country: string
  count: number
}

async function getTypesCount(productTypes: string[]) {
  const data = await dbApi.fetchTypesCount(productTypes)
  const productTypesCount: IProductTypesCount[] = []

  productTypes.forEach((product, i) => {
    productTypesCount.push({ type: product, count: data[i]! })
  })

  return productTypesCount
}

async function getCountry(productType: string) {
  const countries = await dbApi.fetchCountries(productType)
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

export const getData = {
  getTypesCount,
  getCountry,
}

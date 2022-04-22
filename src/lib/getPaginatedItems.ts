import { ParsedUrlQuery } from 'querystring'
import { dbConnect } from '../db/dbConnect'
import ShopGoods from '../models/shopGoods'
import { getAsString } from './getAsString'

export async function getPaginatedItem(query: ParsedUrlQuery) {
  await dbConnect()
  const page = getValueNumber(query.page!) || 1
  const rowsPerPage = 4
  const offset = (page - 1) * rowsPerPage

  const dbParams = {
    type: getValueStr(query.type!),
    country: getValueStr(query.country!),
    minPrice: getValueNumber(query.minPrice!),
    maxPrice: getValueNumber(query.maxPrice!),
  }

  type QueryParams = {
    category: string
    country: string
    priceOfGoods: { ['$gte']?: number; ['$lte']?: number }
  }

  const findQuery = {} as QueryParams

  if (dbParams.type) {
    findQuery.category = dbParams.type
  }
  if (dbParams.country) {
    findQuery.country = dbParams.country
  }

  if (dbParams.minPrice && dbParams.maxPrice) {
    findQuery.priceOfGoods = {
      $gte: dbParams.minPrice,
      $lte: dbParams.maxPrice,
    }
  } else if (dbParams.minPrice) {
    findQuery.priceOfGoods = {
      $gte: dbParams.minPrice,
    }
  } else if (dbParams.maxPrice) {
    findQuery.priceOfGoods = {
      $lte: dbParams.maxPrice,
    }
  }

  const resultPromise = ShopGoods.find(findQuery)
    .skip(offset)
    .limit(rowsPerPage)
    .select('-__v -date')
  const resultCountPromise = ShopGoods.find(findQuery).count()

  const [result, resultCount] = await Promise.all([
    resultPromise,
    resultCountPromise,
  ])

  const totalPages = Math.ceil(resultCount / rowsPerPage)

  return { goods: result, totalPages: totalPages }
}

function getValueNumber(value: string | string[]) {
  const str = getValueStr(value) as string
  const number = parseInt(str)
  return isNaN(number) ? null : number
}

function getValueStr(value: string | string[]) {
  const str = getAsString(value)
  return !str || str.toLowerCase() === 'all' ? null : str
}

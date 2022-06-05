import { QueryParams } from '../lib/getPaginatedItems'
import FaqModel from '../models/shopFaq'
import ShopGoods from '../models/shopGoods'
import { dbConnect } from './dbConnect'

const fetchTypesCount = async (productTypes: string[]) => {
  await dbConnect()
  const promises = productTypes.map((type) =>
    ShopGoods.countDocuments({
      category: type,
    })
  )
  return await Promise.all(promises)
}

const fetchCountries = async (productType: string) => {
  await dbConnect()
  const countries: { country: string }[] = await ShopGoods.find({
    category: productType,
  }).select('country -_id')
  return countries
}

const getSingleProductById = async (productId: string) => {
  await dbConnect()
  const product = await ShopGoods.findById(productId).select('-date -__v')
  return product
}

const getFaqList = async () => {
  await dbConnect()
  const faqList = await FaqModel.find().select('-date -__v')
  return faqList
}

const getPaginationData = async (
  findQuery: QueryParams,
  offset: number,
  rowsPerPage: number
) => {
  await dbConnect()
  const resultPromise = ShopGoods.find(findQuery)
    .skip(offset)
    .limit(rowsPerPage)
    .select('-__v -date')

  const resultCountPromise = ShopGoods.find(findQuery).count()

  const [result, resultCount] = await Promise.all([
    resultPromise,
    resultCountPromise,
  ])

  return { result, resultCount }
}

export const dbApi = {
  fetchTypesCount,
  fetchCountries,
  getSingleProductById,
  getFaqList,
  getPaginationData,
}

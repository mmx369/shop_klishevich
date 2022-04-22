import { useMemo } from 'react'
import { IProduct } from '../types/Product'

const useFilteredProducts = (
  productList: IProduct[],
  category: string,
  country: string
) => {
  const sortedByCategory = useMemo(() => {
    return category
      ? productList.filter((product) => product.category === category)
      : productList
  }, [category, productList, country])

  const sortedByCountry = useMemo(() => {
    return country
      ? sortedByCategory.filter((product) => product.country === country)
      : sortedByCategory
  }, [country, productList, category])

  return sortedByCountry
}

export const useFilter = (
  productList: IProduct[],
  category: string,
  country: string,
  query: string
) => {
  const filteredProducts = useFilteredProducts(productList, category, country)

  const filteredAndSearchedProducts = useMemo(() => {
    return filteredProducts.filter((product) =>
      product.nameOfGoods.toLowerCase().includes(query.toLowerCase())
    )
  }, [query, filteredProducts])
  return filteredAndSearchedProducts
}

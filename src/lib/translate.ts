import { CATEGORIES, COUNTRIES } from '../constants/translate_map'

export function translateCountry(country: string) {
  return COUNTRIES[country] as string
}

export function translateCategory(category: string) {
  return CATEGORIES[category] as string
}

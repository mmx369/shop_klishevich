import { CATEGORIES, COUNTRIES } from '../constants/translate_map'

export function translateCountry(country: string) {
  if (!COUNTRIES[country]) {
    return country
  }
  return COUNTRIES[country] as string
}

export function translateCategory(category: string) {
  if (!CATEGORIES[category]) {
    return category
  }
  return CATEGORIES[category] as string
}

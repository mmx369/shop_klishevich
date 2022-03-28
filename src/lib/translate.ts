import { CATEGORIES, COUNTRIES } from '../constants/translate_map'

export function translateCountry(country: any) {
  //@ts-ignore
  return COUNTRIES[country]
}

export function translateCategory(category: any) {
  //@ts-ignore
  return CATEGORIES[category]
}

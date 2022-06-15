import {
  CATEGORIES,
  COUNTRIES,
  TRANSLATE_MAP,
} from '../constants/translate_map'

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

export function translate(word: string) {
  if (!TRANSLATE_MAP[word]) {
    return word
  }
  return TRANSLATE_MAP[word] as string
}

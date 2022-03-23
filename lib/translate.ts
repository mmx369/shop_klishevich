import { CATEGORIES, COUNTRIES } from "../constants/translate_map";

export function translateCountry(country) {
  return COUNTRIES[country];
}

export function translateCategory(category) {
  return CATEGORIES[category];
}

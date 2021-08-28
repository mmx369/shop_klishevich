const countryList = {
  USSR: 'CCCР',
  Russia: 'Россия',
  Tadjikistan: 'Таджикистан',
}

export function translateCountry(country) {
  return countryList[country]
}

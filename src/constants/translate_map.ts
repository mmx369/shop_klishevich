type CategoryMap = {
  [key: string]: string
}

export const CATEGORIES: CategoryMap = {
  'Paper Money': 'Банкноты',
  Coins: 'Монеты',
  Other: 'Прочие',
}

type CountryMap = {
  [key: string]: string
}

export const COUNTRIES: CountryMap = {
  USSR: 'СССР',
  Russia: 'Россия',
  Tajikistan: 'Таджикистан',
  Uzbekistan: 'Узбекистан',
  Burma: 'Бирма',
  Yugoslavia: 'Югославия',
  Cambodia: 'Камбоджа',
  Iran: 'Иран',
  Nepal: 'Непал',
  Bhutan: 'Бутан',
  Lao: 'Лаос',
  China: 'Китай',
  Afganistan: 'Афганистан',
}

type TranslateMap = {
  [key: string]: string
}

export const TRANSLATE_MAP: TranslateMap = {
  open: 'открыт',
  paid: 'оплачен',
  shipped: 'отправлен',
  received: 'получен',
  closed: 'закрыт',
}

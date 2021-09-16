export const categories = {
  'Paper Money': 'Банкноты',
  Coins: 'Монеты',
  Other: 'Прочие',
}

export function translateCategory(category) {
  return categories[category]
}

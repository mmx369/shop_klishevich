export const category = {
  'Paper Money': 'Банкноты',
  Coins: 'Монеты',
  Other: 'Прочие',
}

export function translateCategory(category) {
  return category[category]
}

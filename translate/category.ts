export function translateCategory(category) {
  return category === 'Paper Money'
    ? 'Банкноты'
    : category === 'Coins'
    ? 'Монеты'
    : category === 'Other'
    ? 'Прочие'
    : null
}

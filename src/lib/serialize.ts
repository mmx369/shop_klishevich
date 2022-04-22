export function serializeData(data: any[]) {
  const serializedArray: any[] = data.map((el) => {
    const resultArr = Object.entries(el._doc).map(([key, value]) => {
      if (key === 'order') {
        return [key, JSON.stringify(value)]
      }
      if (Array.isArray(value)) {
        return [key, value]
      }
      if (value instanceof Date) {
        return [key, value.toISOString()]
      }
      if (typeof value === 'object' && value !== null) {
        return [key, value.toString()]
      }
      return [key, value]
    })
    return Object.fromEntries(resultArr)
  })
  return serializedArray
}

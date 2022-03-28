export function serializeData(data: any[]) {
  const serializedArray: any[] = data.map((el) => {
    return { ...el._doc, _id: el._doc._id.toString() }
  })

  return serializedArray
}

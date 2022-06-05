import { dynamicSort } from '../src/lib/dynamicSort'

describe('dynamicSort function test', () => {
  const dummyData = [
    { name: 'John Doe', age: 88 },
    { name: 'Jane Doe', age: 55 },
    { name: 'Vova Putin', age: 24 },
  ]

  const expectedDataSortedByAge = [
    { name: 'Vova Putin', age: 24 },
    { name: 'Jane Doe', age: 55 },
    { name: 'John Doe', age: 88 },
  ]

  const expectedDataSortedByName = [
    { name: 'Jane Doe', age: 55 },
    { name: 'John Doe', age: 88 },
    { name: 'Vova Putin', age: 24 },
  ]

  it('Should return an array sorted by age', () => {
    let result = dummyData.sort(dynamicSort('age'))
    expect(result).toStrictEqual(expectedDataSortedByAge)
  })

  it('Should return an array sorted by name', () => {
    let result = dummyData.sort(dynamicSort('name'))
    expect(result).toStrictEqual(expectedDataSortedByName)
  })
})

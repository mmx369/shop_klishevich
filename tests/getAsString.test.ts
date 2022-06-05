import { getAsString } from '../src/lib/getAsString'

describe('getAsString function test', () => {
  it('Should return empty string if value is undefined', () => {
    const result = getAsString(undefined)
    expect(result).toEqual('')
  })
  it('Should return first element of array if value is an array', () => {
    const dummyArray = ['first', 'second', 'third']
    const result = getAsString(dummyArray)
    expect(result).toEqual(dummyArray[0])
  })
  it('Should return the same if value is string', () => {
    const dummyData = 'test'
    const result = getAsString(dummyData)
    expect(result).toEqual(dummyData)
  })
})

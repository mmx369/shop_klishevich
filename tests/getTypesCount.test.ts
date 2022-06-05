import { getData } from '../src/lib/getData'

describe('getTypesCount function test', () => {
  const dummyData = ['Paper Money', 'Coins', 'Other']

  it('should return an array', () => {
    return getData.getTypesCount(dummyData).then((data) => {
      expect(Array.isArray(data)).toBe(true)
    })
  })

  it('should return not empty array', () => {
    return getData.getTypesCount(dummyData).then((data) => {
      expect(data.length).toBeGreaterThan(0)
    })
  })
})

import { getTypesCount } from '../src/database/getTypesCount'

describe('getTypesCount function test', () => {
  const dummyData = ['Paper Money', 'Coins', 'Other']
  const result = getTypesCount(dummyData)

  it('should return an array', () => {
    expect(Array.isArray(result)).toBe(true)
  })

  it('should return not empty array', () => {
    expect(result.length).toBeGreaterThan(0)
  })
})

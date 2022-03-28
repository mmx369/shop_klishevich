import { serializeData } from '../src/lib/serialize'

describe('Serialize function test', () => {
  const dummyData = [
    { _doc: { _id: {}, b: 'test', c: 'tttt' } },
    { _doc: { _id: {}, b: 'test', c: 'tttt' } },
  ]
  let result = serializeData(dummyData)

  it('should return an not empty array with id type string ', () => {
    expect(Array.isArray(result)).toBe(true)
  })

  it('should return not empty array', () => {
    expect(result.length).toBeGreaterThan(0)
  })

  it('should return array with it type equal to string', () => {
    for (let i = 0; i < result.length; i++) {
      expect(typeof result[i]._id === 'string').toBe(true)
    }
  })
})

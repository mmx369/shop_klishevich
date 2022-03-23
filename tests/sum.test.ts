import sum from '../helpers/sum'

describe('Sum function test', () => {
  it('should sum number correctly', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

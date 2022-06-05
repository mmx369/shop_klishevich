import { COUNTRIES } from '../src/constants/translate_map'
import { translateCountry } from '../src/lib/translate'

describe('Translate function test', () => {
  it('should return translated word if possible or return the same word', () => {
    const resultPositive = translateCountry('Russia')
    const resultNegative = translateCountry('XXX')
    expect(resultPositive).toEqual(COUNTRIES['Russia'])
    expect(resultNegative).toEqual('XXX')
  })
})

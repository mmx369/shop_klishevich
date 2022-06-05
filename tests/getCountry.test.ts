import { dbApi } from '../src/db/dbApi'
import { getData } from '../src/lib/getData'

describe('getCountry function test', () => {
  const mockedResponse = [
    { country: 'China' },
    { country: 'Nepal' },
    { country: 'Bhutan' },
    { country: 'Tajikistan' },
    { country: 'Nepal' },
    { country: 'Nepal' },
  ]

  const expectedData = [
    { country: 'China', count: 1 },
    { country: 'Nepal', count: 3 },
    { country: 'Bhutan', count: 1 },
    { country: 'Tajikistan', count: 1 },
  ]

  const spy = jest
    .spyOn(dbApi, 'fetchCountries')
    .mockImplementation(() => mockedResponse as any)

  it('should return correct number of product for each country', () => {
    getData.getCountry('Paper Money').then((result) => {
      expect(spy).toBeCalled()
      expect(result).toStrictEqual(expectedData)
    })
  })
})

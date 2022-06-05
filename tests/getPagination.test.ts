import { dbApi } from '../src/db/dbApi'
import { getPaginatedItem } from '../src/lib/getPaginatedItems'

describe('getPagination function test', () => {
  const dummyQuery = {
    type: 'Paper Money',
    country: 'Iran',
    minPrice: 'all',
    maxPrice: 'all',
    page: '1',
  }

  const mockedResponse = {
    result: [
      {
        imageUrl: [
          'https://res.cloudinary.com/dxalptcye/image/upload/v1632169982/zoanw0ijbkyluxbgy8b1.jpg',
        ],
        _id: '6148f004ee3b82180f7ba8b7',
        nameOfGoods: '3 рубля',
        amountOfGoods: 2,
        priceOfGoods: 260,
        catalogNumber: 'Р-223',
        country: 'USSR',
        category: 'Paper Money',
      },
      {
        imageUrl: [
          'https://res.cloudinary.com/dxalptcye/image/upload/v1632170099/rlm4mhyfft4sxwlbbric.jpg',
        ],
        _id: '6148f078ee3b82180f7ba8b9',
        nameOfGoods: '1 рубль',
        amountOfGoods: 10,
        priceOfGoods: 190,
        catalogNumber: 'Р-222',
        country: 'USSR',
        category: 'Paper Money',
      },
      {
        imageUrl: [
          'https://res.cloudinary.com/dxalptcye/image/upload/v1632170152/dahmfyx1ukbk374kyse4.jpg',
        ],
        _id: '6148f0abee3b82180f7ba8ba',
        nameOfGoods: '1000 Сум',
        amountOfGoods: 3,
        priceOfGoods: 200,
        catalogNumber: 'Р-82',
        country: 'Uzbekistan',
        category: 'Paper Money',
      },
      {
        imageUrl: [
          'https://res.cloudinary.com/dxalptcye/image/upload/v1632170257/u8uqpxyz8vv4zmeb36mh.jpg',
        ],
        _id: '6148f115ee3b82180f7ba8bb',
        nameOfGoods: '100 Рублей 1961 UNC',
        amountOfGoods: 4,
        priceOfGoods: 1900,
        catalogNumber: 'P-236',
        country: 'USSR',
        category: 'Paper Money',
      },
    ],
    resultCount: 58,
  }

  const spy = jest
    .spyOn(dbApi, 'getPaginationData')
    .mockImplementation(() => mockedResponse as any)

  it('Should return correct data', () => {
    return getPaginatedItem(dummyQuery).then((data) => {
      expect(spy).toBeCalled()
      expect(Array.isArray(data.goods)).toBe(true)
      expect(data.goods).toHaveLength(4)
      expect(data.totalPages).toEqual(Math.ceil(mockedResponse.resultCount / 4))
    })
  })
})

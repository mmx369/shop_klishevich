import { ThemeProvider } from '@mui/styles'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { PRODUCTS_TYPES } from '../../src/constants'
import {
  getData,
  ICountryCount,
  IProductTypesCount,
} from '../../src/lib/getData'
import { translateCategory, translateCountry } from '../../src/lib/translate'
import Homepage, { getServerSideProps } from '../../src/pages/index'
import {
  appSelectors,
  cartSelectors,
  shippingSelectors,
} from '../../src/redux/selectors'
import theme from '../../src/theme'
import { ELoggedIn } from '../../src/types/ELoggedIn'

jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}))

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
  }),
}))

const TEST_productTypesCount: IProductTypesCount[] = [
  { type: 'Paper Money', count: 5 },
  { type: 'Coins', count: 4 },
  { type: 'Other', count: 0 },
]

const TEST_listOfCountriesCount: ICountryCount[] = [
  { country: 'USSR', count: 3 },
  { country: 'Uzbekistan', count: 1 },
  { country: 'Burma', count: 1 },
]

const TEST_cartItems = [
  {
    amountOfGoods: 2,
    catalogNumber: '',
    category: 'Coins',
    country: 'Lao',
    imageUrl: [
      'https://res.cloudinary.com/dxalptcye/image/upload/v1649633826/vgurrpp8dcsiwybedpug.jpg',
    ],
    nameOfGoods: 'Test Product 1',
    priceOfGoods: 500,
    _id: '625376e868fd311f58a08cc1',
  },
  {
    amountOfGoods: 200,
    catalogNumber: 'P-300',
    category: 'Paper Money',
    country: 'Russia',
    imageUrl: [
      'https://res.cloudinary.com/dxalptcye/image/upload/v1649633826/vgurrpp8dcsiwybedpug.jpg',
    ],
    nameOfGoods: 'Test Product 2',
    priceOfGoods: 500,
    _id: '625376e868fd311f58a08cc2',
  },
]

jest.spyOn(appSelectors, 'currentEmail').mockReturnValue('test@test.com')
jest.spyOn(appSelectors, 'currentRole').mockReturnValue('admin')
jest.spyOn(appSelectors, 'isLoggedIn').mockReturnValue(ELoggedIn.True)
jest.spyOn(cartSelectors, 'currentCart').mockReturnValue(TEST_cartItems)
jest.spyOn(shippingSelectors, 'shippingPrice').mockReturnValue(400)

describe('HomePage', () => {
  it('getServerSideProps returns the correct data from api', async () => {
    const TEST_productTypesCountPromise = new Promise((resolve) =>
      setTimeout(() => resolve(TEST_productTypesCount), 0)
    )

    const TEST_listOfCountriesCountPromise = new Promise((resolve) =>
      setTimeout(() => resolve(TEST_listOfCountriesCount), 0)
    )

    jest
      .spyOn(getData, 'getTypesCount')
      .mockReturnValue(
        TEST_productTypesCountPromise as Promise<IProductTypesCount[]>
      )

    jest
      .spyOn(getData, 'getCountry')
      .mockImplementation(
        async () => TEST_listOfCountriesCountPromise as Promise<ICountryCount[]>
      )

    const response = await getServerSideProps({} as any)
    expect(getData.getTypesCount).toHaveBeenCalledTimes(1)
    expect(getData.getCountry).toHaveBeenCalledTimes(2)
    expect(getData.getTypesCount).toHaveBeenCalledWith(PRODUCTS_TYPES)
    expect(getData.getCountry).toHaveBeenNthCalledWith(1, 'Paper Money')
    expect(getData.getCountry).toHaveBeenLastCalledWith('Coins')

    expect(response).toEqual({
      props: {
        productTypesCount: TEST_productTypesCount,
        listOfCountriesCount: TEST_listOfCountriesCount,
        listOfCountriesCoinsCount: TEST_listOfCountriesCount,
      },
    })
  })

  it('Home page renders initial correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Homepage
          productTypesCount={TEST_productTypesCount}
          listOfCountriesCount={TEST_listOfCountriesCount}
          listOfCountriesCoinsCount={TEST_listOfCountriesCount}
        />
      </ThemeProvider>
    )
    expect(screen.getByText(/Вы вошли как test@test.com/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Выйти/i })).toBeInTheDocument()
    expect(screen.getByText(/Приветствую Вас на сайте/i)).toBeInTheDocument()
    expect(screen.getByText(/Каталог/)).toBeInTheDocument()
    TEST_productTypesCount.forEach((el) => {
      if (el.type !== 'Other') {
        expect(screen.getByText(translateCategory(el.type))).toBeInTheDocument()
      }
    })
    TEST_listOfCountriesCount.forEach((el) => {
      expect(screen.getByText(translateCountry(el.country))).toBeInTheDocument()
    })
    expect(screen.getByLabelText(/Тип товара/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Страна/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Минимальная цена/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Максимальная цена/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Искать/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: 'Интернет-магазин. Нумизматика и бонистика',
      })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Главная/i })).toBeInTheDocument()
    expect(
      screen.getAllByRole('link', { name: /Оплата и доставка/i })
    ).toHaveLength(2)
    expect(
      screen.getByRole('link', { name: /Вопросы и ответы/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Контакты/i })).toBeInTheDocument()
  })

  it('Home page UI works correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Homepage
          productTypesCount={TEST_productTypesCount}
          listOfCountriesCount={TEST_listOfCountriesCount}
          listOfCountriesCoinsCount={TEST_listOfCountriesCount}
        />
      </ThemeProvider>
    )
    const drawerButton = screen.getByRole('button', { name: /open drawer/i })
    expect(
      screen.queryByRole('link', { name: /администрирование/i })
    ).not.toBeInTheDocument()
    userEvent.click(drawerButton)
    expect(
      screen.getByRole('link', { name: /администрирование/i })
    ).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'

import App from '../pages/index'

describe('Should render the app without crashing', () => {
  it('Renders the home page', () => {
    render(
      <App
        types={[
          { type: 'Paper Money', count: 100 },
          { type: 'Coins', count: 0 },
          { type: 'Other', count: 0 },
        ]}
        countries={[{ country: 'Россия', count: 10 }]}
        listOfCountries={[{ country: 'Россия', count: 10 }]}
        listOfCountriesCoins={[{ country: 'Россия', count: 10 }]}
      />
    )
    expect(
      screen.getByRole('strong', { name: 'Интернет-магазин.' })
    ).toBeInTheDocument()
  })
})

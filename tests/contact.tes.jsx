import { screen } from '@testing-library/react'
import App from '../src/pages/contacts/index'
import { render } from './utils/test-utils.jsx'

describe('Should render the Contact page without crashing', () => {
  it('Renders Contact page', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Контакты' })).toBeInTheDocument()
  })
})

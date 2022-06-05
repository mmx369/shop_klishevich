import { screen } from '@testing-library/react'
import { useSession } from 'next-auth/client'
import App from '../../src/pages/contacts/index'
import { render } from '../utils/test-utils'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: '',
      asPath: '',
    }
  },
}))

jest.mock('next-auth/client')

describe('Should render the Contact page without crashing', () => {
  it('Renders Contact page', () => {
    //@ts-ignore
    useSession.mockReturnValueOnce([false, false])
    render(<App />)
    expect(screen.getByRole('button', { name: 'Контакты' })).toBeInTheDocument()
  })
})

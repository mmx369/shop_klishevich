import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/styles'
import { Provider as SessionProvider } from 'next-auth/client'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Provider } from 'react-redux'
import ErrorBoundary from '../components/ErrorBoundary'
import { useStore } from '../store'
import '../styles/global.css'
import theme from '../theme'

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <CssBaseline />
        <Head>
          <meta
            name='description'
            content='Интернет-магазин нумизматики и бонистики. Продажа банкнот и монет'
          />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta charSet='utf-8' />
          <link rel='icon' href='/favicon.ico' />
          <title>
            Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет
          </title>
        </Head>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </ThemeProvider>
      </SessionProvider>
    </Provider>
  )
}

import '../styles/global.css'

import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Head from 'next/head'
import theme from '../theme'

import { AppProps } from 'next/app'
import { Provider as SessionProvider } from 'next-auth/client'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import Layout from '../components/layout/layout'

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
    <ThemeProvider theme={theme}>
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

            <title>
              Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и
              монет
            </title>
          </Head>
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
    </ThemeProvider>
  )
}

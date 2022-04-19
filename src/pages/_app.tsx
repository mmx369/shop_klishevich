import '../styles/global.css'
import { ThemeProvider } from '@mui/styles'
import CssBaseline from '@mui/material/CssBaseline'
// import { CacheProvider } from '@emotion/react'
import Head from 'next/head'
import theme from '../theme'

import { AppProps } from 'next/app'
import { Provider as SessionProvider } from 'next-auth/client'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import React from 'react'

// import createEmotionCache from '../createEmotionCash'

// Client-side cache, shared for the whole session of the user in the browser.
// const clientSideEmotionCache = createEmotionCache()

export default function App({ Component, pageProps }: AppProps) {
  // const {
  //   Component,
  //   //@ts-ignore
  //   emotionCache = clientSideEmotionCache,
  //   pageProps,
  // } = props
  const store = useStore(pageProps.initialReduxState)

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    // <CacheProvider value={emotionCache}>
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
            Нумизматика и бонистика | Интернет-магазин | Продажа банкнот и монет
          </title>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </Provider>
    // </CacheProvider>
  )
}

import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@mui/styles'
// import createEmotionCache from '../createEmotionCash'
// import createEmotionServer from '@emotion/server/create-instance'
import theme from '../theme'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ru'>
        <Head>
          {/* PWA primary color */}
          <meta name='theme-color' content={theme.palette.primary.main} />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {
            //@ts-ignore
            // this.props.emotionStyleTags
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  // const sheets = new ServerStyleSheets()
  // const originalRenderPage = ctx.renderPage

  const sheets = new ServerStyleSheets()

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  // const cache = createEmotionCache()
  // const { extractCriticalToChunks } = createEmotionServer(cache)

  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    })

  // ctx.renderPage = () =>
  //   originalRenderPage({
  //     enhanceApp: (App) =>
  //       function EnhanceApp(props) {
  //         return (
  //           <App
  //             //@ts-ignore
  //             emotionCache={cache}
  //             {...props}
  //           />
  //         )
  //       },
  //   })

  const initialProps = await Document.getInitialProps(ctx)
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  // const emotionStyles = extractCriticalToChunks(initialProps.html)
  // const emotionStyleTags = emotionStyles.styles.map((style) => (
  //   <style
  //     data-emotion={`${style.key} ${style.ids.join(' ')}`}
  //     key={style.key}
  //     // eslint-disable-next-line react/no-danger
  //     dangerouslySetInnerHTML={{ __html: style.css }}
  //   />
  // ))

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  }
}

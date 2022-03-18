import { ContextProvider } from 'context'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nephxlin boilerplate 2021</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Nephxlin new modern boilerplate - 2021"
        />
      </Head>
      <GlobalStyles />
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  )
}

export default App

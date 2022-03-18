import { ContextProvider } from 'context'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from 'styles/global'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>Github react</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Github react - 2022" />
      </Head>
      <GlobalStyles />
      <SessionProvider session={session}>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </SessionProvider>
    </>
  )
}

export default App

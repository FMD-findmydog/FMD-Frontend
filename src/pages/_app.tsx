import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"></script>
      </Head>
      <Component {...pageProps} />  
    </>
  )
}

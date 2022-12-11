import { Html, Head, Main, NextScript } from 'next/document'
import {Header} from '../containers/Header/Header'
export default function Document() {
  return (
    <Html>
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" /> 
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        {/*<Header />*/}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
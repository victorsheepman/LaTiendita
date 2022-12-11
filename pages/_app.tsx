
import type { AppProps } from 'next/app'
import '../styles/main.scss'
import { AppContext, initialLocation } from 'Context/LocationContext'
function MyApp({ Component, pageProps }: AppProps) {
  const appValue = initialLocation();
  return <AppContext.Provider value={appValue}><Component {...pageProps} /></AppContext.Provider> 
}

export default MyApp

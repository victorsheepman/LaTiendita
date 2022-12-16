

import '../styles/main.scss'
import { AppContext, initialLocation } from 'Context/LocationContext'
function MyApp({ Component, pageProps }) {
  const appValue = initialLocation();
  return <AppContext.Provider value={appValue}><Component {...pageProps} /></AppContext.Provider> 
}

export default MyApp

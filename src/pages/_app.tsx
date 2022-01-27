import {AppProps} from 'next/app'
import '../../styles/globals.scss'
import { CartProvider } from '../context/ContextCart'
function MyApp({ Component, pageProps }:AppProps) {
  return( 
  <CartProvider>
      <Component {...pageProps} />)
  </CartProvider>
  )
}

export default MyApp

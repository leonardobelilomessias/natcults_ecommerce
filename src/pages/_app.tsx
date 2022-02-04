import {AppProps} from 'next/app'
import NextHead from 'next/head'
import '../../styles/globals.scss'
import { Header } from '../components/Header'
import { CartProvider } from '../context/ContextCart'
function MyApp({ Component, pageProps }:AppProps) {
  return( 
    
  <CartProvider>
      <Header></Header>
      <Component {...pageProps} />
  </CartProvider>

  )
}

export default MyApp

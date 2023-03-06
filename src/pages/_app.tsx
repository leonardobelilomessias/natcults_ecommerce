import {AppProps} from 'next/app'
import NextHead from 'next/head'
import '../../styles/globals.scss'
import { Footer } from '../components/Footer'
import {  HeaderMantine } from '../components/Header'
import { CartProvider } from '../context/ContextCart'
import { MantineProvider } from '@mantine/core';
function MyApp({ Component, pageProps }:AppProps) {
  return( 
    


<MantineProvider
withGlobalStyles
withNormalizeCSS
theme={{
  /** Put your mantine theme override here */
  colorScheme: 'light',
}}
>
<CartProvider>
      <HeaderMantine links={links}/>
      <Component {...pageProps} />
      <Footer></Footer>
  </CartProvider>
</MantineProvider>

  )
}

export default MyApp

const links = [{
  link: '/',
  label: 'home'
},
{
  link: '/sobre',
  label: 'Sobre'
},
{
  link: '/carrinho',
  label: 'Carrinho'
}
]
import {AppProps} from 'next/app'
import NextHead from 'next/head'
import '../../styles/globals.scss'
import { FooterCentered } from '../components/Footer'
import {  HeaderMantine } from '../components/Header'
import { CartProvider } from '../context/ContextCart'
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications'
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
<Notifications />
<CartProvider>
      <HeaderMantine links={links}/>
      <Component {...pageProps} />
      <FooterCentered links={links}/>
  </CartProvider>
</MantineProvider>

  )
}

export default MyApp

const links = [{
  link: '/',
  label: 'Pagina Inicial'
},
{
  link: '/sobre',
  label: 'Sobre'
},
{
  link: '/Cart',
  label: 'Carrinho'
}
]
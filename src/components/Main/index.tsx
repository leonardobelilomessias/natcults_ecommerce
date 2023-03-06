import Image from 'next/image'
import style from './main.module.scss'
import { CardItem } from '../CardItem'
import { HeroImageBackground } from './HeroImageBackground'

export function Main(){
  return(
    <>
    <main className={style.main}>
      <section className={style.section}>

    <HeroImageBackground/>
       
          <article className={style.promo} >
            <h1>Promoções</h1>
          <CardItem></CardItem>
          </article>

          <article className={style.moreSales}>
            <h1>Mais Vendidos</h1>
                <CardItem></CardItem>
          </article>

          <article className={style.promo}>
            <h1>Lançamentos</h1>
            <CardItem></CardItem>
          </article>
      
      </section>
    </main>
    </>
  )
  }
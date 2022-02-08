import Image from 'next/image'
import style from './main.module.scss'
import { CardItem } from '../CardItem'

export function Main(){
  return(
    <>
    <main className={style.main}>

      <section className={style.section}>
        <div className={style.banner}>
        <div className={style.searchBanner}>
          <input type="text"  placeholder='Buscando por algo?'/>
          <button> Buscar </button>
        </div>
        </div>
       
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
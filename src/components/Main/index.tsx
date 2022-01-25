import Image from 'next/image'
import style from './main.module.scss'
import Banner from '../../../assets/banner.jpg'
import Camomila from '../../assets/img/chacamomila.jpg'
import Chaverde from '../../assets/img/chaverde.jpg'
import Chaerva from '../../assets/img/chaerva.jpg'


export function Main(){
  return(
    <main className={style.main}>

      <section className={style.section}>
        <div className={style.banner}>
          <Image src={Banner} width={600} height={250} alt="banner"></Image>
        <div className={style.infoBanner}>
          <h1>Chá de limão</h1>
          <h2>R$21,90</h2>
          <button>Comprar</button>
        </div>
        </div>
      <article className={style.promo}>
        <h1>Promoções</h1>
        <div className={style.itensPromo}>
          <div className={style.itemPromo}>
            <p className={style.title}>Cha de Limão</p>
            <div className={style.imgProduct}> 
            <Image src={Chaerva} alt="chaerva"></Image>
            </div>
            <p className={style.priceProduct}>R$21,90</p>
          </div>
          <div className={style.itemPromo}>
          <div className={style.itemPromo}>
            <p className={style.title}>Cha de Limão</p>
            <div className={style.imgProduct}> <Image src={Camomila} alt="Camomila"></Image> </div>
            <p className={style.priceProduct}>R$21,90</p>
          </div>
          </div>
          <div className={style.itemPromo}>
          <div className={style.itemPromo}>
            <p className={style.title}>Cha de Limão</p>
            <div className={style.imgProduct}> 
            <Image src={Chaverde} alt="chaverde"></Image>
            </div>
            <p className={style.priceProduct}>R$21,90</p>
          </div>
          </div>
        </div>
      </article>

      </section>

      <aside className={style.aside}>
        <h3>Categorias</h3>
        <div className={style.category}>
          <a href='#'>Chá de limão</a>
          <a href='#'>Chá de Camomila</a>
          <a href='#'>Chá de Erva cidreira</a>
          <a href='#'>Chá de Hibisco</a>
          <a href='#'>Chá de Mate</a>
          <a href='#'>Chá de Canela</a>
        </div>
      </aside>
    </main>
  )
  }
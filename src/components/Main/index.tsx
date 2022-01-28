import Image from 'next/image'
import style from './main.module.scss'
import Banner from '../../../assets/banner.jpg'
import Camomila from '../../assets/img/chacamomila.jpg'
import Chaverde from '../../assets/img/chaverde.jpg'
import Chaerva from '../../assets/img/chaerva.jpg'
import { useContext, useState } from "react";
import { CartContext } from "../../context/ContextCart";
import { Aside } from '../Aside'

export function Main(){
  const {products,cart,setCart} = useContext(CartContext)
  
  function addProduct(productAdd){
    products.forEach(product=> {
      if(product.id.valueOf()== productAdd.value){ 
        setCart([...cart,product])
        return 
        }
      })
  }

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
              {products.map(product=>(
                        <div className={style.itemPromo} key={product.id}>
                        <p className={style.title}>{product.name}</p>
                        <div className={style.imgProduct}> 
                        <Image src={Chaerva} alt="chaerva"></Image>
                        </div>
                        <p className={style.priceProduct}>R${product.price}</p>
                        <button value={product.id} onClick={(e)=>{addProduct(e.target)}}>Comprar</button>
                      </div>
              ))}
            </div>
          </article>
      </section>
            <Aside></Aside>
    </main>
  )
  }
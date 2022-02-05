import Image from 'next/image'
import style from './main.module.scss'

import Camomila from '../../assets/img/chacamomila.jpg'
import Chaverde from '../../assets/img/chaverde.jpg'
import Chaerva from '../../assets/img/chaerva.jpg'
import { useContext, useState } from "react";
import { CartContext } from "../../context/ContextCart";
import { Aside } from '../Aside'
import Link from 'next/link'
import Head from 'next/head'
import Product from '../../pages/Product/[id]'

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
    <>

    <main className={style.main}>

      <section className={style.section}>
        <div className={style.banner}>
          
        <div className={style.infoBanner}>
          <h1>Chá de Limão</h1>
          <h2>R$21,90</h2>
          <button>COMPRAR</button>
        </div>
        </div>
       
          <article className={style.promo} >
            <h1>Promoções</h1>
            <div className={style.itensPromo}>
              {products.map(product=>(
                        <div className={style.itemPromo} key={product.id}>
                            <Link href={`/Product/${product.id}`}>
                              <a>
                                <div className={style.imgProduct}> 
                                  <Image src={Chaverde}  width={200} height={200} alt="chaerva"></Image>
                                </div>
                              </a>
                            </Link>
                            <p className={style.title}>{product.name}</p>
                            <p className={style.priceProduct}>R${product.price}</p>
                            <button value={product.id} onClick={(e)=>{addProduct(e.target)}}>Comprar</button>
                      </div>
              ))}
            </div>
          </article>

          <article className={style.moreSales}>
            <h1>Promoções</h1>
            <div className={style.itensPromo}>
              {products.map(product=>(
                        <div className={style.itemPromo} key={product.id}>
                            <Link href={`/Product/${product.id}`}>
                              <a>
                                <div className={style.imgProduct}> 
                                  <Image src={Chaverde}  width={200} height={200} alt="chaerva"></Image>
                                </div>
                              </a>
                            </Link>
                            <p className={style.title}>{product.name}</p>
                            <p className={style.priceProduct}>R${product.price}</p>
                            <button value={product.id} onClick={(e)=>{addProduct(e.target)}}>Comprar</button>
                      </div>
              ))}
            </div>
          </article>
      
      </section>
    </main>
    </>
  )
  }
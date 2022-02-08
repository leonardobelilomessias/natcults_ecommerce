
import { useCallback, useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/ContextCart"
import { useRouter } from "next/router"
import style from './style.module.scss'
import Cha from '../../assets/img/chaverde.jpg'
import Image from "next/image"
import Head from "next/head"
import Cart from "../Cart"


export default function Product(){
  const router = useRouter()
  const {
    query: { id },
  } = router
  const {products,cart,setCart} =useContext(CartContext)

  const product= []


products.forEach(productAll=>{
      if( productAll.id.valueOf() == Number(id)){
        product.push(productAll)
      }
    })
 function handleAddProduct(){
  console.log(product[0])
  setCart([...cart,product[0]])
 }

  return(
    <>
        <Head>
          <title>{product.map(item=>(item.name))}</title>
        </Head>
    <main className={style.container}>
    <h1>Produto</h1>
    <section className={style.contentProduct}>
      <div className={style.images}>
        <div className={style.imgSmallers}>
            <div className={style.imgSmaller}>
              <Image src={Cha}></Image>
            </div>
            <div className={style.imgSmaller}>
              <Image src={Cha}></Image>
            </div>
            <div className={style.imgSmaller}>
              <Image src={Cha}></Image>
            </div>
        </div>
        <div className={style.imgLarge}>
        <Image src={Cha}></Image>
        </div>
      </div>
      <div className={style.info}>
            {product.map(item=>(
              <>
            <h1> {item.name}</h1>
            <p>{item.description}</p>
            <p>{item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            <button value={item.id} onClick={handleAddProduct}>Comprar</button>
            </>
            ))}
      </div>

    </section>

    </main>


    
    </>
  )
}
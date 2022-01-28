import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { Aside } from "../../components/Aside";
import { CartContext } from "../../context/ContextCart";
import style from './cart.module.scss'

export default function Cart(){
  const [total,setTotal] =useState(0)
  const {cart,deleteItem,setCart} = useContext(CartContext)
  useEffect(()=>{
   setTotal( cart.reduce((acc,vlr)=>{
      return acc + vlr.price
    },0))
  },[cart])
return(
  <>
      <Head>
        <title>Carrinho</title>
      </Head>
      <section className={style.main}>
          <section>
            <h1>Carrinho</h1>
            <h2>Itens</h2>
            <div className={style.listProducts}>

                    <div className={style.title}>
                      <p>Produto</p>
                      <p>preço</p>
                    </div>
                    <div className={style.products}>

                      { cart.map((item,index)=>(
                        <div className={style.product}>
                          <p  key={index}>{item.name}</p>
                          <p> {item.price}</p>
                          <button value={index} onClick={(e)=>{deleteItem([e.target,setCart])}}>Excluir</button>
                        </div>
                      ))}
                    </div>
            </div>
            <h3>Total</h3> <p>{total}</p>
          </section>
          <Aside></Aside>
      </section>



  </>
  )
}
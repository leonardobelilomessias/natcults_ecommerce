import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Aside } from "../../components/Aside";
import { CartContext } from "../../context/ContextCart";
import style from './cart.module.scss'
import { Container,Product, Products, Total } from "./Styles";
import Cha from '../../assets/img/chaverde.jpg'

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
      <Container>
          <section>
            <h1>Carrinho</h1>
            <h2>Itens</h2>
            {(total === 0)?<p> Não há itens no carrinho</p>:
            <>

              <Products>

                  { cart.map((item,index)=>(
                      <Product>
                        <div>
                        <Image src={Cha} width={200} height={200}></Image>

                        </div>
                        <p  key={index}>{item.name}</p>
                        <p > {item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                        <button value={index} onClick={(e)=>{deleteItem([e.target,setCart])}}>Excluir</button>
                      </Product>
                  ))}
              </Products>
            <Total>
              <div>

                <h3>Total:</h3><p>{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
              </div>
              <button>Finalizar Compra</button>
            </Total>      
            </>
          }

          </section>
         
      </Container>



  </>
  )
}
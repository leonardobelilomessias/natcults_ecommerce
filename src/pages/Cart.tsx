import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { CartContext } from "../context/ContextCart";

export default function Cart(){
  const {cart,products} = useContext(CartContext)
  const[seeCart,setSeeCart] =useState(false)
  const [listCart,setListCart] =useState([])


  useEffect(()=>{
    
    
  },[])

 
  function handleseeCart(){
    setSeeCart(!seeCart)
    console.log(seeCart)
  }
return(
  <>
  <Head>
    <title>Carrinho</title>
  </Head>
  <h1>Carrinho</h1>
  { cart.map((item,index)=>(<p  key={index}>{item.name}</p>))}

  <button onClick={handleseeCart}>Ver</button>


  </>
  )
}
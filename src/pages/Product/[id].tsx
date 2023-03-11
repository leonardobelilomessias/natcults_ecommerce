
import { useCallback, useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/ContextCart"
import { useRouter } from "next/router"

import Cha from '../../assets/img/chaverde.jpg'
import Image from "next/image"
import Head from "next/head"
import Cart from "../Cart"
import { CardItem } from "../../components/LargePromotion"


export default function Product() {
  const router = useRouter()
  const {
    query: { id },
  } = router
  const { products, cart, setCart } = useContext(CartContext)

  const product = []


  products.forEach(productAll => {
    if (productAll.id == id) {
      product.push(productAll)
    }
  })
  function handleAddProduct() {
    console.log(product[0])
    setCart([...cart, product[0]])
  }

  return (
    <>
      <Head>
        <title>{product.map(item => (item.name))}</title>
      </Head>
      <main >
        <h1>Produto</h1>
        <section >
          <div >
            <div >
              <div >
                <Image alt="" src={Cha}></Image>
              </div>
              <div >
                <Image alt="" src={Cha}></Image>
              </div>
              <div >
                <Image alt="" src={Cha}></Image>
              </div>
            </div>
            <div >
              <Image alt='' src={Cha}></Image>
            </div>
          </div>
          <div >
            {product.map(item => (
              <>
                <h1> {item.name}</h1>
                <p>{item.description}</p>
                <p>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                <button value={item.id} onClick={handleAddProduct}>Comprar</button>
              </>
            ))}
          </div>

        </section>
        <section>
          <h2>Produtos Relacionados</h2>
          <CardItem></CardItem>
        </section>
      </main>



    </>
  )
}
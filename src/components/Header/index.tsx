import Image from "next/image";
import Leaf from '../../assets/img/leaf.png'
import Bag from '../../../assets/bag.png'
import style from './header.module.scss'
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/ContextCart";
export function Header(){
  const {cart} = useContext(CartContext)
  const [cartLength,setCartLength] = useState(0)
  useEffect(()=>{
    setCartLength(cart.length)
  },[cart])

  return(
    <header className={style.header}>

          <Link href="/">
            <a>
          <div className={style.logo}>
            <Image src={Leaf} height={50} width={50} alt="Logo"></Image>
            <h1>Natcults</h1>
          </div>
            </a>
          </Link>

      <nav className={style.nav}>
          <Link href="/">
            <a >Inicio</a>
          </Link>
          <Link href="sobre">
            <a >Sobre</a>
          </Link>
          <Link href="blog">
            <a>Blog</a>
          </Link>
          <Link href="contato">
            <a >Contato</a>
          </Link>
      </nav>

      <div className={style.bag}>
        {cartLength > 0 && <div className={style.countItem}>{cartLength}</div>}

            <Link href="/Cart">
                <a>
                    <Image src={Bag} alt="Shooping bag" height={38} width={40}></Image>
                </a>
            </Link>
      </div>
    </header>
  )
}
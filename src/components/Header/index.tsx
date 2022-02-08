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
            <div className={style.imgLogo}>
            <Image src={Leaf} height={30} width={30} alt="Logo"></Image>
            </div>
            <h1>Natcults</h1>
          </div>
            </a>
          </Link>

      <nav className={style.nav}>
          <Link href="/">
            <a >Inicio</a>
          </Link>
          <Link href="/">
            <a >Sobre</a>
          </Link>
          <Link href="/">
            <a>Blog</a>
          </Link>
          <Link href="/">
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
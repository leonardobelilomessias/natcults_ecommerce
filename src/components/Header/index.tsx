import Image from "next/image";
import Leaf from '../../assets/img/leaf.png'
import Bag from '../../../assets/bag.png'
import style from './header.module.scss'
import Link from "next/link";
export function Header(){
  console.log('header')
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
        <a href="#">Inicio</a>
        <a href="#">Sobre</a>
        <a href="#">Blog</a>
        <a href="#">Contato</a>
        
      </nav>
      <Link href="/Cart">
        <a>

      <Image src={Bag} alt="Shooping bag" height={38} width={40}></Image>
        </a>
      </Link>
    </header>
  )
}
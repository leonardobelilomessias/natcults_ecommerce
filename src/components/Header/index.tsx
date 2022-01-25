import Image from "next/image";
import Leaf from '../../assets/img/leaf.png'
import Bag from '../../../assets/bag.png'
import style from './header.module.scss'
export function Header(){
  return(
    <header className={style.header}>
      <div className={style.logo}>
        <Image src={Leaf} height={50} width={50} alt="Logo"></Image>
        <h1>Natcults</h1>
      </div>
      <nav className={style.nav}>
        <a href="#">Inicio</a>
        <a href="#">Sobre</a>
        <a href="#">Blog</a>
        <a href="#">Contato</a>
        
      </nav>
      <Image src={Bag} alt="Shooping bag" height={38} width={40}></Image>
    </header>
  )
}
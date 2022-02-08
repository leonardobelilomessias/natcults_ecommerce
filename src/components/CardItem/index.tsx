import Link from "next/link"
import Image from "next/image"
import style from './cardItem.module.scss'
import Chaverde from '../../assets/img/chaverde.jpg'
import { CartContext } from "../../context/ContextCart"
import { useContext } from "react"
export function CardItem(){
  const {products,setCart,cart} = useContext(CartContext)
  function addProduct(productAdd){
    products.forEach(product=> {
      if(product.id.valueOf()== productAdd.value){ 
        setCart([...cart,product])
        console.log(product)
        return 
        }
      })
  }
  return(
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
  )
}
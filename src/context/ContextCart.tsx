import {useState,createContext,ReactNode} from "react";
import { products as allProducts } from "../data/products";
type ItensProps={
  id:number
  name:string
  price:number
  description:string
}
type DataCArtContext={
  products:ItensProps[]
  cart:CartProps[]
  setCart:([])=>void
}
type CartProps={
  id:number
  name:string
  price:number
  description:string
}

type CartProvideProps={
  children: ReactNode
}
const CartContext = createContext<DataCArtContext>({} as DataCArtContext)
function CartProvider({children}:CartProvideProps){
  const [products,setProducts] = useState<ItensProps []>(allProducts)
  const [cart,setCart]=useState<CartProps []>([])
  return(
    <CartContext.Provider value={{products,cart,setCart}}>
      {children}
    </CartContext.Provider>
  )
}



export {CartProvider,CartContext}
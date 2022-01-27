import {useState,createContext,ReactNode} from "react";
import { products as allProducts } from "../data/products";
type ItensProps={
  id:number
  name:string
  price:number
  description:string
}


type CartProvideProps={
  children: ReactNode
}
const CartContext = createContext<ItensProps []>([])
function CartProvider({children}:CartProvideProps){
  const [products,setProdcts] = useState<ItensProps []>(allProducts)
  return(
    <CartContext.Provider value={products}>
      {children}
    </CartContext.Provider>
  )
}



export {CartProvider,CartContext}
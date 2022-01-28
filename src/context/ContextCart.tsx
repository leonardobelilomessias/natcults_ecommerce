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
  deleteItem:([])=>void
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

  function deleteItem([itemIndex,setCart]){
      cart.forEach((item,index)=>{ 
        const formatIndex = parseInt(itemIndex.value)
        if(index == itemIndex.value){
          cart.splice(formatIndex,1)
          setCart([...cart])
        }
      })
  }
  return(
    <CartContext.Provider value={{products,cart,setCart,deleteItem}}>
      {children}
    </CartContext.Provider>
  )
}

export {CartProvider,CartContext}
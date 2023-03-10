
import {useState,createContext,ReactNode} from "react";
import { products as allProducts } from "../data/products";

type ItensProps={
  id:string
  name:string
  price:number
  description:string
}
type DataCArtContext={
  products:ItensProps[]
  cart:CartProps[]
  setCart:([])=>void
  deleteItem:(idItem:string)=>void
  addItem:(idItem:string)=>void
}
type CartProps={
  id:string
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

  function addItem(idItem:string){
    const newItem = products.find((itemList)=>{
      return itemList.id === idItem
    })
    setCart(itensCart=>([...itensCart,newItem]))
  }

  function deleteItem(idItem:string){
    //const foundItem = cart.findIndex((item)=>(idItem ===item.id))
    setCart((cart)=>{
      cart.splice(Number(idItem),1)
      return [...cart]
    })
  }
  return(
    <CartContext.Provider value={{products,cart,setCart,deleteItem,addItem}}>
      {children}
    </CartContext.Provider>
  )
}

export {CartProvider,CartContext}
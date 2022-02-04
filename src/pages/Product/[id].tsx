
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/ContextCart"
import { useRouter } from "next/router"

export default function Product(){
  const router = useRouter()
  const {
    query: { id },
  } = router
  const {products} =useContext(CartContext)
  const [product,setProduct] = useState<any>({})
  useEffect(()=>{
    products.forEach(productAll=>{
      console.log(productAll.id)
      if( productAll.id.valueOf() === Number(id)){
        console.log('achei')
        
      }
    })
  },[])
  return(
    <>
    
     <p>{product.id}</p>

    
    </>
  )
}
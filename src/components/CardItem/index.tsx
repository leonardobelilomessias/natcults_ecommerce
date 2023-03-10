
import Link from "next/link"

import Image from "next/image"

import Chaverde from '../../assets/img/chaverde.jpg'
import { CartContext } from "../../context/ContextCart"
import { useContext } from "react"
import { CardMantine } from "./CardMantine"
import { Box, Flex } from "@mantine/core"
export function CardItem(){
  const {products,setCart,cart} = useContext(CartContext)
  console.log(products)
  function addProduct(productAdd){
    products.forEach(product=> {
      if(product.id.valueOf()== productAdd.value){ 
        setCart([...cart,product])
        return 
        }
      })
  }
  return(
    <Flex       
    gap="xl"
    justify="space-around"
    align="center"
    direction="row"
    wrap="wrap"
    
    >

    {products?.map(product=>(
        <Box maw={'400px'} key={product.id}>

        <CardMantine description={product.description} id={product.id} price={product.price} name={product.name}/>
        </Box>
        ))}
  
        </Flex>
  )
}
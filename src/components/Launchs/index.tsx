
import Link from "next/link"

import Image from "next/image"

import Chaverde from '../../assets/img/chaverde.jpg'
import { CartContext } from "../../context/ContextCart"
import { useContext } from "react"

import { Box, Divider, Flex, Space, Title } from "@mantine/core"
import { LargeCardItem } from "../LargeCardItem"
import { MediumCardItem } from "../MediumCardItem"
export function Launchs(){
  const {products,setCart,cart} = useContext(CartContext)
  
  function addProduct(productAdd){
    products.forEach(product=> {
      if(product.id.valueOf()== productAdd.value){ 
        setCart([...cart,product])
        return 
        }
      })
  }
  return(
      <Box>

        <Title m={50} ta={'center'}>Lançamentos</Title>
        <Flex my={'lg'} wrap={'wrap'} justify={'center'} gap={'5rem'}  px='10rem'>

        {products.map((product)=>(
          <MediumCardItem img={product.img} description={product.description} id={product.id} price={product.price} name={product.name} key={product.id}/>
          ))}
        {products.map((product)=>(
          <MediumCardItem img={product.img} description={product.description} id={product.id} price={product.price} name={product.name} key={product.id}/>
          ))}
      </Flex>
        <Space h={'xl'} />
        <Divider my="xl" variant="dashed" />

      </Box>
  )
}
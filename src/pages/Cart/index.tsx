import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Aside } from "../../components/Aside";
import { CartContext } from "../../context/ContextCart";
import { BsTrash3 } from 'react-icons/bs'
import Cha from '../../assets/img/chaverde.jpg'
import Link from "next/link";
import { CardItem } from "../../components/LargePromotion";
import { CartEmpty } from "../../components/Cart/CartEmpty";
import { Box, Button, Card, Center, Flex, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { products } from "../../data/products";
import { SmallCardItem } from "../../components/SmallCardItem";


export default function Cart() {
  const { colors } = useMantineTheme()
  const [total, setTotal] = useState(0)
  const { cart, deleteItem, setCart } = useContext(CartContext)
  useEffect(() => {
    setTotal(cart.reduce((acc, vlr) => {
      return acc + vlr.price
    }, 0))
  }, [cart])
  return (
    <>
      <Head>
        <title>Carrinho</title>
      </Head>
      <Stack p={'3rem'}>

        <section>
          <Title mb={'3rem'}>Carrinho</Title>

          {(total === 0) ? <CartEmpty /> :
            <>

              <Flex px={'3rem'} gap={'2rem'} wrap={'wrap'} py={'3rem'}>

                {cart.map((item, index) => (
                  <Card key={index} w={'15rem'} shadow={'md'} withBorder sx={{ alignItems: 'center', justifyContent: "center" }}>


                    <Link href={`/Product/${item.id}`}>

                      <div>
                        <Image src={Cha} alt='' width={200} height={200} />
                      </div>

                    </Link>
                    <Text fw={'bold'} ta={'center'} key={index}>{item.name}</Text>
                    <Text color={'green'} ta={'center'} fw={'bold'} size={'xl'} > {item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
                    <Button w={'100%'} color={'dark'} leftIcon={<BsTrash3 size={15} />} variant={'outline'} value={index} onClick={(e) => { deleteItem(String(index)) }}>Excluir</Button>

                  </Card>
                ))}
              </Flex>
              <Flex justify={'space-between'} bg={colors['green']['0']} p={'1rem'} mt='2rem' wrap={'wrap'}>
                <Center>

                  <Text fw={'bold'} fz={'2rem'} mr={'1rem'}>Total:</Text><Text fw={'bold'} color={'green'} fz={'2rem'}>{total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
                </Center>

                <Link href="/Checkout">
                  <Button color={'green'}>Finalizar Compra</Button>
                </Link>

              </Flex>
            </>
          }

        </section>
        <br />
        <h2>Produtos que você também pode gostar</h2>
        <Flex gap={'3rem'}>
          {products.map((product)=>(
            <SmallCardItem name={product.name} id={product.id} description={product.description} price={product.price} key={product.id} img={product.img}/>
          ))}
        </Flex>
      </Stack>




    </>
  )
}
import { Box, Center, Text } from "@mantine/core";
import Image from "next/image";
import emptyCart from '../../assets/img/emptycart.svg'
export function CartEmpty(){
    return(
        <>
        <Center mt={100} mb={150}>
            <Box>
            <Image src={emptyCart} height={300} width={300} alt='cart empty'/>
            <div> <Text ta={'center'} color={'dimmed'} size={'1.4rem'} fw={'bold'}>Ainda não há itens no carrinho.</Text> </div>
            </Box>
        </Center>
        </>
    )
}
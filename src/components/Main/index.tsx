import Image from 'next/image'

import { CardItem } from '../CardItem'
import { HeroImageBackground } from './HeroImageBackground'
import { Box, Divider, Header, Space, Stack, Text, Title } from '@mantine/core'

export function Main(){
  return(
    <>
    <main >
      <section >

    <HeroImageBackground/>
       
          <Box component='article' my={'lg'} >
            <Title m={50} >Promoções</Title>
          <CardItem></CardItem>
          </Box>
          <Space  h={'xl'}/>
          <Divider my="xl" variant="dashed" />

        <Box my={'lg'}>

            <Title m={50} >Mais Vendidos</Title>
                <CardItem></CardItem>
                <Space  h={'xl'}/>
                <CardItem></CardItem>

                <Space  h={'xl'}/>
          <Divider my="xl" variant="dashed" />
        </Box>


          <article >
            <Title m={50} >Lançamentos</Title>
            <CardItem></CardItem>
          </article>
      
      </section>
    </main>
    </>
  )
  }
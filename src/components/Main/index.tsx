import Image from 'next/image'

import { CardItem } from '../LargePromotion'
import { HeroImageBackground } from './HeroImageBackground'
import { Box, Divider, Header, Space, Stack, Text, Title } from '@mantine/core'
import { MostSales } from '../MostSales'
import { FeaturesBussines } from './FeaturesBussines'
import { Launchs } from '../Launchs'

export function Main() {
  return (
    <>
      <main >
        <section >

          <HeroImageBackground />
          <FeaturesBussines/>
          <Box component='article' my={'lg'} >
            <Title m={50} ta={'center'} >Promoções</Title>
            <CardItem></CardItem>
          </Box>
          <Space h={'xl'} />
          <Divider my="xl" variant="dashed" />
          <MostSales/>
  
            <Launchs/>


        </section>
      </main>
    </>
  )
}
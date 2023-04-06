'use-client'
import React from 'react'
import { Flex, Image, Heading, VStack, Text, Link } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <VStack as='footer' bg='brand.100' color='white' spacing={4} py={4}>
      <Flex
        flexDir='row'
        justifyContent='center'
        alignItems='center'
        wrap='wrap'
        gap={4}
      >
        <Heading as='h2' size='lg'>
          Patrocinan
        </Heading>
        <Flex
          flexDir='row'
          wrap='wrap'
          justifyContent='center'
          gap={4}
          px={2}
        >
          <Link href='https://imca.edu.pe/' isExternal target='_blank'>
            <Image
              src='/images/logo_imca.webp'
              alt='logo imca'
              rounded='md'
              shadow='md'
              bg='white'
              height={[12, 24]}
              p={2}
            />
          </Link>
          <Link href='https://vra.uni.edu.pe/' isExternal target='_blank'>
            <Image
              src='/images/logo_uni.webp'
              alt='logo uni'
              rounded='md'
              shadow='md'
              bg='white'
              height={[12, 24]}
              p={2}
            />
          </Link>
          <Link
            href='https://www.cmm.uchile.cl/'
            isExternal
            target='_blank'
          >
            <Image
              src='/images/logo_cmm.webp'
              alt='logo cmm'
              rounded='md'
              shadow='md'
              bg='white'
              height={[12, 24]}
              p={2}
            />
          </Link>
        </Flex>
      </Flex>
      <Flex justifyContent='center'>
        <Text fontSize='sm'>Cimmuni 2023 | Todos los derechos reservados.</Text>
      </Flex>
    </VStack>
  )
}

export const FooterSimple = () => {
  return (
    <VStack as='footer' bg='brand.100' color='white' spacing={4} py={4}>
      <Flex justifyContent='center' mt='0px !important'>
        <Text fontSize='sm'>Cimmuni 2023 | Todos los derechos reservados.</Text>
      </Flex>
    </VStack>
  )
}

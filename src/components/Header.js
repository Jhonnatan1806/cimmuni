import React from 'react'
import { Box, Image, Text, VStack } from '@chakra-ui/react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <VStack as='header' bg='brand.100'>
      <Box position='relative' width='full' height='40vh'>
        <Image
          position='absolute'
          top={0}
          zIndex={0}
          src='/images/biblioteca_fc_cover.webp'
          alt='biblioteca fc'
          objectFit='cover'
          align='center'
          width='full'
          height='inherit'
        />
        <Box
          position='relative'
          zIndex={10}
          height='full'
          width='full'
          maxW={1200}
          margin='auto'
        >
          <Box
            color='white'
            display='flex'
            flexDirection='column'
            height='full'
            gap={2}
            justifyContent='center'
            p={2}
          >
            <Text fontWeight='bold' fontSize={[36, 48, 64]}>
              IV Congreso Internacional Multidisciplinario de Matemática
            </Text>
            <Text fontSize={[16, 20, 24]}>
              Del 9 al 12 de mayo de 2023 - Presencial
            </Text>
          </Box>
        </Box>
      </Box>
      <Navbar width='full' maxW={1200} />
    </VStack>
  )
}

export default Header

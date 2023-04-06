import Header from './Header'
import { Footer, FooterSimple } from './Footer'
import { Container, VStack } from '@chakra-ui/react'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <VStack as='main' py={4}>
        <Container maxW={1200} minH='70vh'>
          {children}
        </Container>
      </VStack>
      <Footer />
    </>
  )
}

export const LayoutSimple = ({ children }) => {
  return (
    <>
      <Header />
      <VStack as='main' py={4}>
        <Container maxW={1200} minH='70vh'>
          {children}
        </Container>
      </VStack>
      <FooterSimple />
    </>
  )
}

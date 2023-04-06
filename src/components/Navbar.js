import React from 'react'
import { Box, Flex, List, ListItem, Link, IconButton, VStack, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import routes from '@/routes/routes'

const NavItem = () => {
  return (
    <>
      {
      routes.map((route, index) => (
        <ListItem key={index} _hover={{ bg: 'brand.200' }}>
          <Link
            textTransform='uppercase'
            fontSize='sm'
            href={route.path}
            _hover={{ textDecoration: 'none' }}
          >
            <Box p={4}>{route.name}</Box>
          </Link>
        </ListItem>
      ))
      }
    </>
  )
}

const Navbar = ({ ...props }) => {
  return (
    <Flex as='nav' {...props}>
      <DesktopNav />
      <MobileNav />
    </Flex>
  )
}

const DesktopNav = () => {
  return (
    <VStack display={['none', 'block']}>
      <List
        display='flex'
        flexWrap='wrap'
        color='white'
      >
        <NavItem />
      </List>
    </VStack>
  )
}

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <VStack display={['block', 'none']} py={2}>
        <IconButton
          size='md'
          aria-label='Open Menu'
          colorScheme='brand'
          icon={isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={6} h={6} />}
          onClick={isOpen ? onClose : onOpen}
        />
        {
        isOpen && (
          <List
            display='column'
            flexWrap='wrap'
            color='white'
            width='100vw'
          >
            <NavItem />
          </List>
        )
        }

      </VStack>
    </>
  )
}

export default Navbar

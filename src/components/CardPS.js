import React from 'react'
import { Card, CardBody, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Country from './Country'
import { EmailIcon, LinkIcon, PhoneIcon } from '@chakra-ui/icons'

const CardPS = ({ data }) => {
  return (
    <>
      <Card>
        <CardBody display='flex' alignItems='center' gap={4}>
          <Image src={data.image} alt={data.name} rounded='md' width={128} />
          <Flex flexDir='column' gap={2}>
            <Flex gap={2}>
              <Heading as='h3' size='sm' flexGrow={1} noOfLines={1}>{data.name}</Heading>
              <Country country={data.country} w={5} />
            </Flex>
            <Text>{data.institution}</Text>
            <Flex gap={2} color='brand.100'>
              <PhoneIcon />
              <EmailIcon />
              <LinkIcon />
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </>
  )
}

export default CardPS

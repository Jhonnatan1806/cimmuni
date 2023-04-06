import React from 'react'
import { Card, CardBody, Flex, Heading, Image } from '@chakra-ui/react'
import Country from './Country'

const CardTeam = ({ team }) => {
  return (
    <Card alignItems='center'>
      <CardBody display='flex' flexDir='column' alignItems='center' gap={4}>
        <Image src={team.image} alt={team.name} rounded='full' width={128} />
        <Flex gap={4}>
          <Heading as='h3' size={['xs', 'sm']} noOfLines={1}>
            {team.name}
          </Heading>
          <Country country={team.country} width={4} />
        </Flex>
      </CardBody>
    </Card>
  )
}

export default CardTeam

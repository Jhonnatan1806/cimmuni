import { Layout } from '@/components/Layout'
import {
  Flex,
  Grid,
  GridItem,
  Heading
} from '@chakra-ui/react'
import CardTeam from '@/components/CardTeam'
import comites from '@/data/comites.json'

export default function Comites({ cientifico, organizador }) {
  return (
    <Layout>
      <Flex flexDir='column' gap={4} mb={8}>
        <Heading>Comite Científico</Heading>
        <Grid
          templateColumns={[
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
            'repeat(4, 1fr)'
          ]}
          gap={4}
        >
          {cientifico.map((item, index) => (
            <GridItem key={index}>
              <CardTeam team={item} />
            </GridItem>
          ))}
        </Grid>
      </Flex>
      <Flex flexDir='column' gap={4} mb={8}>
        <Heading>Comite Organizador</Heading>
        <Grid
          templateColumns={[
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
            'repeat(4, 1fr)'
          ]}
          gap={4}
        >
          {organizador.map((item, index) => (
            <GridItem key={index}>
              <CardTeam team={item} />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      cientifico: comites.scientist,
      organizador: comites.organizer
    }
  }
}

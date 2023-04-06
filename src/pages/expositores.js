import { Layout } from '@/components/Layout'
import { Heading, Grid, GridItem } from '@chakra-ui/react'
import CardPS from '@/components/CardPS'
import data from '@/data/expositores.json'

export default function Expositores({ plenaristas, conferencistas }) {
  return (
    <>
      <Layout>
        <Heading as='h2'>Plenaristas</Heading>
        {
          plenaristas && (
            <>
              <Grid
                templateColumns={[
                  'repeat(1, 1fr)',
                  'repeat(2, 1fr)',
                  'repeat(3, 1fr)'
                ]}
                gap={4}
              >
                {plenaristas.map((item, index) => (
                  <GridItem key={index}>
                    <CardPS data={item} />
                  </GridItem>
                ))}
              </Grid>
            </>
          )
        }
        <Heading as='h2'>Conferencistas</Heading>
        {
          conferencistas && (
            <>
              <Grid
                templateColumns={[
                  'repeat(1, 1fr)',
                  'repeat(2, 1fr)',
                  'repeat(3, 1fr)'
                ]}
                gap={4}
              >
                {conferencistas.map((item, index) => (
                  <GridItem key={index}>
                    <CardPS data={item} />
                  </GridItem>
                ))}
              </Grid>
            </>
          )
        }
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const plenaristas = data.plenarists
  const conferencistas = data.speakers

  return {
    props: {
      plenaristas,
      conferencistas
    }
  }
}

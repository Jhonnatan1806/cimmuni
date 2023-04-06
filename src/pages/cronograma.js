import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Card,
  CardBody,
  Heading,
  Image,
  Grid,
  GridItem
} from '@chakra-ui/react'
import { Layout } from '@/components/Layout'
import schedule from '@/data/horarios.json'
import lines from '@/data/lineasinv.json'

export default function Cronograma({ horarios, lineasinv }) {
  return (
    <>
      <Layout sponsor>
        <TableContainer rounded='md' shadow='md'>
          <Table variant='striped' colorScheme='smoke'>
            <Thead>
              <Tr bg='brand.100'>
                <Th color='white'>Horarios</Th>
                <Th color='white'>Martes</Th>
                <Th color='white'>Miercoles</Th>
                <Th color='white'>Jueves</Th>
                <Th color='white'>Viernes</Th>
              </Tr>
            </Thead>
            <Tbody>
              {horarios.map((horario, index) => (
                <Tr key={index}>
                  <Td>{horario.horas}</Td>
                  <Td>{horario.martes}</Td>
                  <Td>{horario.miercoles}</Td>
                  <Td>{horario.jueves}</Td>
                  <Td>{horario.viernes}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Heading as='h2' size='lg' textAlign='center' my={4}>
          Lineas de Investigación
        </Heading>
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)'
          ]}
          gap={4}
        >
          {lineasinv.map((item, index) => (
            <GridItem key={index} m={2}>
              <Card userSelect='none'>
                <CardBody
                  display='flex'
                  flexDir='column'
                  justifyContent='center'
                  gap={4}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={300}
                    rounded='md'
                  />
                  <Heading as='h3' size='xs' textAlign='center' noOfLines={1}>
                    {item.name}
                  </Heading>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      horarios: schedule,
      lineasinv: lines
    }
  }
}

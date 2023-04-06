import { Layout } from '@/components/Layout'
import { Box, Card, CardBody } from '@chakra-ui/react'

export default function Registro() {
  return (
    <>
      <Layout sponsor>
        <Box display='flex' flexDir='column' alignItems='center' gap={4}>
          <Card>
            <CardBody>
              <iframe
                src='https://docs.google.com/forms/d/e/1FAIpQLSc7zthpULC4VL7ujdl_icfr_aL9M9N_0ugXDFuwE6AG_ico6Q/viewform?embedded=true'
                width='640'
                height='1240'
              >
                Cargando…
              </iframe>
            </CardBody>
          </Card>
        </Box>
      </Layout>
    </>
  )
}

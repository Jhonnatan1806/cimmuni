import { Layout } from '@/components/Layout'
import { Text } from '@chakra-ui/react'
import Map from '@/components/Map'

export default function Contacto() {
  return (
    <>
      <Layout sponsor>
        <Text>
          Para contactarnos por favor enviar un correo a jmunguial@uni.edu.pe
          con el siguiente asunto: cimm-uni-2023.
        </Text>
        <Map />
      </Layout>
    </>
  )
}

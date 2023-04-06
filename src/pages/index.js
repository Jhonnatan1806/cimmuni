import { LayoutSimple } from '@/components/Layout'
import { Flex, Heading, Image, Link, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <LayoutSimple>
        <Flex flexDir={['column', 'row']} gap={4}>
          <Flex flexDir='column' gap={4}>
            <Heading as='h1'>Resumen</Heading>
            <Text textAlign='justify'>
              El Congreso Internacional Multidisciplinario de Matemática
              (CIMM-UNI) es un evento científico organizado por la&nbsp;
              <Link
                isExternal
                color='brand.100'
                href='https://matematica-fc.netlify.app/'
                target='_blank'
              >
                <strong>Escuela Profesional de Matemática</strong>
              </Link>
              &nbsp;de la Facultad de Ciencias de la UNI, que se viene
              desarrollando anualmente desde el año 2020. Este congreso Inició
              como una actividad interna fomentando la participación de los
              diversos grupos de investigación de la Escuela de Matemática de la
              FC-UNI. Durante este breve tiempo este congreso ha logrado tener
              un reconocimiento importante por otros grupos e investigadores
              externos de áreas diversas de la Matemática.
            </Text>
            <Text textAlign='justify'>
              En esta cuarta edición, que será de manera presencial, se
              presentarán múltiples temas de la Matemática dentro de las áreas
              de álgebra, optimización, análisis numérico, investigación de
              operaciones, sistemas dinámicos, entre otras.
            </Text>
            <Link
              href='/registro'
              bg='brand.100'
              color='white'
              width='fit-content'
              rounded='md'
              _hover={{ bg: 'brand.200' }}
              px={4}
              py={2}
            >
              Registrate Ahora
            </Link>
            <Flex flexDir='column' gap={4} mt={8}>
              <Heading as='h2'>Patrocinan</Heading>
              <Flex flexDir={['column', 'row']} wrap='wrap' justifyContent='center' alignItems='center' gap={4} px={2}>
                <Link href='https://imca.edu.pe/' isExternal target='_blank'>
                  <Image
                    src='/images/logo_imca.webp'
                    alt='logo imca'
                    rounded='md'
                    shadow='md'
                    bg='white'
                    height={[14, 24]}
                    p={2}
                  />
                </Link>
                <Link href='https://vra.uni.edu.pe/' isExternal target='_blank'>
                  <Image
                    src='/images/logo_uni.webp'
                    alt='logo uni'
                    rounded='md'
                    shadow='md'
                    bg='white'
                    height={[14, 24]}
                    p={2}
                  />
                </Link>
                <Link href='https://www.cmm.uchile.cl/' isExternal target='_blank'>
                  <Image
                    src='/images/logo_cmm.webp'
                    alt='logo cmm'
                    rounded='md'
                    shadow='md'
                    bg='white'
                    height={[14, 24]}
                    p={2}
                  />
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Image
            src='/images/banner.webp'
            alt='banner 2023'
            rounded='md'
            shadow='md'
          />
        </Flex>
      </LayoutSimple>
    </>
  )
}

import React from 'react'
import { Image } from '@chakra-ui/react'

const countries = {
  cl: '/svg/cl.svg',
  br: '/svg/br.svg',
  es: '/svg/es.svg',
  it: '/svg/it.svg',
  mx: '/svg/mx.svg',
  pe: '/svg/pe.svg'
}

export default function Country({ country, ...props }) {
  return <Image src={countries[country]} alt={country} {...props} />
}

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#7C0902',
      200: '#660000',
      300: '#f2f2f2',
      400: '#939598'
    },
    smoke: {
      100: '#f2f2f2',
      200: '#e6e6e6',
      300: '#d9d9d9',
      400: '#cccccc'
    }
  },
  fonts: {
    heading: '\'Raleway\', sans-serif',
    body: '\'Rubik\', sans-serif'
  }
})

export default theme

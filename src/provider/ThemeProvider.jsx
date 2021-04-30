import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import themeCustom from '../style/theme'

// eslint-disable-next-line react/prop-types
export default function ThemeProvider ({ children }) {
  return (
        <ChakraProvider theme={themeCustom}>
            { children }
        </ChakraProvider>
  )
}

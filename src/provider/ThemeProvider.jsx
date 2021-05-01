import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import themeCustom from '../style/theme'

export default function ThemeProvider ({ children }) {
  return (
        <ChakraProvider theme={themeCustom}>
            { children }
        </ChakraProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired
}

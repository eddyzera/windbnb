import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Container,
  Img
} from '@chakra-ui/react'
import Logo from '../assets/logo.svg'
import Search from '../components/search'

export default function Layout ({ children }) {
  return (
        <>
            <Box
                as="header"
                height="6rem"
                background="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Container maxW="container.lg">
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Img src={Logo} alt="windbnb - logo" />
                        <Search />
                    </Box>
                </Container>
            </Box>
            { children }
        </>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

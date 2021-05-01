import React, { useContext } from 'react'
import {
  Box,
  Container,
  Heading,
  LinkBox,
  Img,
  LinkOverlay,
  Text
} from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import Layout from '../layout/index'
import { AppContext } from '../provider/AppProvider'

export default function Home () {
  const { immobiles } = useContext(AppContext)
  return (
        <Layout>
            <Container maxW="container.lg">
                <Heading as="h1" fontSize="md">Fique em Mogi das Cruzes</Heading>
                <Box
                    margin="2rem 0"
                    display="grid"
                    gridTemplateColumns="1fr 1fr 1fr"
                >
                    { immobiles.map(immobile => {
                      return (
                        <LinkBox
                            as="article"
                            maxW="sm" key={immobile.id}
                            p="3"
                            borderWidth="1px"
                            rounded="md"
                        >
                            <LinkOverlay href="#">
                                <Img
                                    src={
                                        `http://localhost:1337${immobile.thumbnail.formats.large.url}`
                                    }
                                    borderRadius="2rem"
                                />
                            </LinkOverlay>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                margin="1rem 0"
                            >
                                {
                                    immobile.superHost && (
                                        <Text
                                            as="p"
                                            padding="0.1rem 0.4rem"
                                            border="1px solid black"
                                            color="black"
                                            borderRadius="3rem"
                                            fontSize="0.8rem"
                                        >
                                            Destaque
                                        </Text>
                                    )
                                }
                                <Text as="p" fontSize="0.9rem">{immobile.type_immobile}</Text>
                                <Text
                                    as="p"
                                    color="black"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    width="3em"
                                    fontSize="0.8rem"
                                >
                                    <FaStar color="#EB5757" />
                                    {immobile.rating}
                                </Text>
                            </Box>
                            <Text
                                as="p"
                                fontSize="1rem"
                                isTruncated
                                maxWidth="19rem"
                                color="black"
                                fontWeight="600"
                            >
                                {immobile.title}
                            </Text>
                        </LinkBox>
                      )
                    }) }
                </Box>
            </Container>
        </Layout>
  )
}

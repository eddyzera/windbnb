import React, { useRef } from 'react'
import {
  Button,
  ButtonGroup,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  Input,
  Container
} from '@chakra-ui/react'
import { FaSistrix } from 'react-icons/fa'

export default function Search () {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
        <ButtonGroup
            size="md"
            isAttached
            boxShadow="0px 1px 6px rgba(0, 0, 0, 0.1)"
            width="15rem"
            borderRadius="1rem"
        >
            <Button
                width="50%"
                borderRight="1px solid #f5f5f5"
                fontSize="0.7rem"
                height="3rem"
                onClick={onOpen}
                sx={{
                  _active: {
                    transform: 'scale(0.7);'
                  }
                }}
            >
                Mogi das Cruzes
            </Button>
            <Button
                width="40%"
                borderRight="1px solid #f5f5f5"
                fontSize="0.7rem"
                height="3rem"
                onClick={onOpen}
                sx={{
                  _active: {
                    transform: 'scale(0.7);'
                  }
                }}
            >
                Convidados
            </Button>
            <IconButton
                width="10%"
                height="3rem"
                icon={<FaSistrix color="#EB5757" />}
                onClick={onOpen}
                sx={{
                  _active: {
                    transform: 'scale(0.7);'
                  }
                }}
            />
        </ButtonGroup>
        <Drawer
            isOpen={isOpen}
            placement="top"
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay>
            <DrawerContent
                background="white"
                height="60vh"
            >
                <DrawerCloseButton />
                <DrawerBody>
                    <Container>
                        <Input placeholder="Type here..." />
                    </Container>
                </DrawerBody>
            </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>
  )
}

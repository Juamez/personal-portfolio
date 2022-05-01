import React from 'react'
import { 
  IconButton, 
  Drawer, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerBody,
  DrawerCloseButton,
  useDisclosure, 
  Link
} from '@chakra-ui/react'
import { GrMenu } from "react-icons/gr"
import {ColorModeSwitcher} from '../ColorModeSwitcher'

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <ColorModeSwitcher mt={1}/>
      <IconButton
        position="fixed"
        top="0"
        right="0" 
        aria-label="Open Menu"
        size="lg"
        icon={<GrMenu />} 
        onClick={onOpen}
      />
      <Drawer 
        placement="right"
        isOpen={isOpen}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent boxSize="250px">
          <DrawerCloseButton />
          <DrawerBody>
            <Link href="#home">Home</Link>
          </DrawerBody>
          <DrawerBody>
            <Link href="#about">About</Link>
          </DrawerBody>
          <DrawerBody>
            <Link href="#skills">Skills</Link>
          </DrawerBody>
          <DrawerBody>
            <Link href="#projects">Projects</Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default HamburgerMenu
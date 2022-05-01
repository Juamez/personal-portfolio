import React from 'react';
import { Box, Link, Flex } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import HamburgerMenu from '../components/HamburgerMenu'

const NavBar = () => {
  return (
    <Flex as="nav" id="home">
      <Flex display={{base: "none", md: "flex"}} justify="space-evenly" align="center" bg="brand.tealBlue" h={12} px={{base: 0, md: "1rem"}} fontSize="xl" position="fixed" top="0" w="100%">
        <Box>Juamez</Box>
        <Box display="flex" justifyContent="space-evenly" w="60%">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
        </Box>
        <ColorModeSwitcher />
      </Flex>
      <Flex display={["flex", "none", "none", "none"]}>
        <HamburgerMenu />
      </Flex>
    </Flex>
  )
}

export default NavBar
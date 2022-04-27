import React from 'react';
import { Container, Box, Image, Heading, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

import IconLink from '../components/IconLink'

const Main = () => {
  return (
    <Container as="main" maxW="100vw" mt={{base: "2rem", md:"10rem"}} display="flex" flexDirection={{base:"column-reverse", md:"row"}} alignItems="center" id="about" px={{base: "0", md: "90px"}}>
      <Box pt={{base:"10"}} pl={{base:"0", md:"25px"}} w={{base:"80vw"}} >
        <Heading>Howdy!!</Heading>
        <Text fontSize="2xl" pt={10} mb={10}>
          I'm a React Frontend Developer from Colombia. Making products to help people conect with experiences throught the web.
        </Text>
        <IconLink url={"https://github.com/Juamez/"} UniqueIcon={FaGithub}/>
        <IconLink ml={8} url={"https://www.linkedin.com/in/juan-pablo-mendez/"} UniqueIcon={FaLinkedin}/>
      </Box>
      <Box w={{base:"100vw", md: "100vw"}} >
        <Image margin={"0 auto"} boxSize={250} objectFit="cover" borderRadius='full' src='https://avatars.githubusercontent.com/u/73722650?v=4' alt='Profile Photo Juamez' />
      </Box>
    </Container>
  )
}

export default Main
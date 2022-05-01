import React from 'react';
import { Container, Box, Image, Heading, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { motion } from 'framer-motion'

import IconLink from '../components/IconLink'

const Main = () => {
  return (
    <motion.div 
      animate={{ x: [-500, 0] }} 
      transition={{ ease: "easeOut", duration: 2 }}>
    
    <Container as="main" maxW="100vw" mt={{base: "2rem", md:"10rem"}} display="flex" flexDirection={{base:"column-reverse", md:"row"}} alignItems="center" id="about" px={{base: "0", md: "90px"}}>
      <Box mt={{base:"12"}} pl={{base:"0", md:"25px"}} w={{base:"80vw"}} >
        <Heading fontFamily="font">Howdy!!</Heading>
        <Text fontSize={{base: "large", md: "2xl"}} fontFamily="font" pt={10} mb={10} >
          I'm a Frontend Developer currently working with React. Making products to help people conect with experiences throught the web.
        </Text>
        <IconLink url={"https://github.com/Juamez/"} UniqueIcon={FaGithub}/>
        <IconLink ml={8} url={"https://www.linkedin.com/in/juan-pablo-mendez/"} UniqueIcon={FaLinkedin}/>
      </Box>
      <Box w={{base:"100vw", md: "100vw"}} >
        <Image margin={"0 auto"} boxSize={250} objectFit="cover" borderRadius='full' src='https://avatars.githubusercontent.com/u/73722650?v=4' alt='Profile Photo Juamez' />
      </Box>
    </Container>
    </motion.div>
  )
}

export default Main
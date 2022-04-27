import React from 'react'
import {Flex, Grid, Box, Heading } from '@chakra-ui/react'

import ProjectCard from '../components/ProjectCard'
import image from '../assets/LoopStudios Desktop.png'
import imageIP from '../assets/IP-Address-Tracker.png'


const Projects = () => {
  return (
    <Box id="projects" p={{base: "0", md:"70px"}} height="100vh">
      <Heading textAlign="center" mb={{base:"0", md:"95px"}}>Projects</Heading>
      <Flex>
        <Grid templateRows="repeat(3, 1fr)" gap={6} mt={"3rem"}>
        <ProjectCard 
            url={imageIP}
            title={"Personal Portfolio"}
            info={"Made this project using React, chakraUI and Framer Motion to show about myself and related projects while learned these technologies"}
            labelName={"React"} labelName1={"ChakraUI"}
            hrefDemo={""}
            hrefCode={""}
          />
          
          <ProjectCard 
            url={imageIP}
            title={"IP Address Tracker"}
            info={"Create a ip address tracker using Leaflet and Mapbox libraries also working with data from IP Geolocation API"}
            labelName={"Javascript"} labelName1={"Css"}
            hrefDemo={"http://ip-address-challenge.vercel.app/"}
            hrefCode={"https://github.com/Juamez/ip-address-challenge"}
          />
          <ProjectCard 
            url={image}
            title={"Loop Studios Page"}
            info={"Web page mobile first workflow using html & sass"}
            labelName={"Html"} labelName1={"Sass"}
            hrefDemo={"https://loopstudios-landing-page-juamez.vercel.app/"}
            hrefCode={"https://github.com/Juamez/Loopstudios-landing-page"}
          />         
        </Grid>
      </Flex>
    </Box>
  )
}

export default Projects
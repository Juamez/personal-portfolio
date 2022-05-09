import React from 'react'
import { Grid, Box, Heading } from '@chakra-ui/react'

import ProjectCard from '../components/ProjectCard'

import imagePortfolio from '../assets/Juan Pablo Mendez.webp'
import imageLoop from '../assets/Loopstudios landing page.webp'
import imageIP from '../assets/IP-Address-Tracker.webp'


const Projects = () => {
  return (
    <Box id="projects" p={{base: "0", md:"70px"}} w="100%" mb="3rem">
      <Heading textAlign="center" mb={{base:"2.5rem", md:"5rem"}}>Projects</Heading>
        <Grid templateRows="repeat(3, 1fr)" gap={6} w="100%"> 
        <ProjectCard 
            url={imagePortfolio}
            alt={"Personal Portfolio HomePage"}
            title={"Personal Portfolio"}
            info={"Made this project using React, chakraUI and Framer Motion to show about myself and related projects while learned these technologies"}
            labelName={"React"} labelName1={"ChakraUI"}
            hrefDemo={"https://juamez.vercel.app/"}
            hrefCode={"https://github.com/Juamez/personal-portfolio"}
          />
          
          <ProjectCard 
            url={imageIP}
            alt={"IP Address Tracker Page"}
            title={"IP Address Tracker"}
            info={"Create a ip address tracker using Leaflet and Mapbox libraries also working with data from IP Geolocation API"}
            labelName={"Javascript"} labelName1={"Css"}
            hrefDemo={"http://ip-address-challenge.vercel.app/"}
            hrefCode={"https://github.com/Juamez/ip-address-challenge"}
          />
          <ProjectCard 
            url={imageLoop}
            alt={"LoopStudios Landing Page"}
            title={"Loop Studios Page"}
            info={"Web page mobile first workflow using html & sass"}
            labelName={"Html"} labelName1={"Sass"}
            hrefDemo={"https://loopstudios-landing-page-juamez.vercel.app/"}
            hrefCode={"https://github.com/Juamez/Loopstudios-landing-page"}
          />         
        </Grid>
      
    </Box>
  )
}

export default Projects
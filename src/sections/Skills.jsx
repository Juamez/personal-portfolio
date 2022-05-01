import React from 'react';
import { Container, Heading, Grid } from "@chakra-ui/react"
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit } from 'react-icons/si'
import { IoLogoSass } from 'react-icons/io'

import IconSkills from '../components/IconSkills'

const Skills = () => {
  return (
    <Container h={490} id="skills" mt={{base:"0", md:"12rem"}}>
      <Heading textAlign="center" my={{base:20, md:20}} >Skills</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap="3rem" mt={{base:"5rem", md:"6rem"}}>
        <IconSkills reference={SiHtml5} color={"#f16524"} />
        <IconSkills reference={SiCss3} color={"#2465f1"}/>
        <IconSkills reference={IoLogoSass} color={"#cf649a"}/>
        <IconSkills reference={SiJavascript} color={"#F0DB4F"} />
        <IconSkills reference={SiReact} color={"#61dafb"} />
        <IconSkills reference={SiGit} color={"#f54d27"} />
      </Grid>
    </Container>
  )
}

export default Skills
import React from 'react';
import { Container, Heading, Grid } from "@chakra-ui/react"
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit } from 'react-icons/si'
import { IoLogoSass } from 'react-icons/io'

import IconSkills from '../components/IconSkills'

const Skills = () => {
  return (
    <Container h={570} id="skills" mt={{base:"0", md:"12rem"}}>
      <Heading textAlign="center" mt={{base:14, md:16}} >Skills</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap="50px" mt={{base:28, md:14}}>
        <IconSkills reference={SiHtml5} />
        <IconSkills reference={SiCss3} />
        <IconSkills reference={IoLogoSass} />
        <IconSkills reference={SiJavascript} />
        <IconSkills reference={SiReact} />
        <IconSkills reference={SiGit} />
      </Grid>
    </Container>
  )
}

export default Skills
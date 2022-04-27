import React from 'react'
import { GridItem, Text, Image, Heading, Flex } from '@chakra-ui/react'
import TagName from '../components/UniqueTag'
import ButtonView from '../components/ButtonView'
import {FaStar, FaCode} from 'react-icons/fa'

const ProjectCard = ({ url, title, info, labelName, labelName1, hrefDemo, hrefCode}) => {
  return (
    <GridItem w="100%" h="70vh" my="5rem" display="flex" flexDirection={{base:"column", md:"row"}} alignItems="center" justifyContent="space-around">
      <Image src={url} boxSize={500} objectFit="cover" ml="5rem" mw="280px"/>
      <Flex direction="column" alignItems="center" w={{base:"100%", md:"100%"}} h="80%" mt={"1.5rem"} ml="6rem">
        <Heading mb="20px" mx="3rem" textAlign="center">{title}</Heading>
        <Text px={{base:"1rem", md:"0"}}>
          {info}
        </Text>
        <Flex mt="25px" justify="center" w="100%">
            <TagName labelName={labelName}/>
            <TagName labelName={labelName1}/>
        </Flex>
        <Flex mt={"50px"} ml={"25px"}>
          <ButtonView action={"Demo"} href={hrefDemo} icon={FaStar}/>
          <ButtonView action={"Code"} href={hrefCode} icon={FaCode}/>
        </Flex>
      </Flex>
    </GridItem>
  )
}

export default ProjectCard
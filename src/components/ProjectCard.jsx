import React from 'react'
import { GridItem, Text, Image, Heading, Flex } from '@chakra-ui/react'
import TagName from '../components/UniqueTag'
import ButtonView from '../components/ButtonView'
import {FaStar, FaCode} from 'react-icons/fa'

const ProjectCard = ({ url, alt, title, info, labelName, labelName1, hrefDemo, hrefCode}) => {
  return (
    <GridItem w={{base: "100%", md: "100%"}} d="flex" flexDirection={{base:"column", md:"row"}} alignItems="center" justifyContent="space-around" mt={{base: "1rem", md: "6rem"}} mx={{base:0, md: "3rem"}}>
      <Image src={url} alt={alt} boxSize={{base: 290, md: 400}} objectFit="contain" alignSelf="center" />
      <Flex direction="column" alignItems="center" justifyContent="center" w={{base:"100%", md:"100%"}} h="100%" mb="1rem" mx={{base: 0, md: "4rem"}}>
        <Heading mb={{base: "2rem", md: "3rem"}} mx="1.5rem" textAlign="center">{title}</Heading>
        <Text mx="2.3rem">
          {info}
        </Text>
        <Flex mt="2rem" justify="center" w="100%">
            <TagName labelName={labelName}/>
            <TagName labelName={labelName1}/>
        </Flex>
        <Flex mt={"3rem"}>
          <ButtonView action={"Demo"} href={hrefDemo} icon={FaStar}/>
          <ButtonView action={"Code"} href={hrefCode} icon={FaCode}/>
        </Flex>
      </Flex>
    </GridItem>
  )
}

export default ProjectCard
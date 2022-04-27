import React from 'react'
import { GridItem, Icon } from '@chakra-ui/react'

const IconSkills = ({ reference }) => {
  return (
    <GridItem w="50%" justifySelf="center" my={{base: "2rem", md:"3rem"}}>
        <Icon as={reference} w={55} h={55} />
    </GridItem>
  )
}

export default IconSkills
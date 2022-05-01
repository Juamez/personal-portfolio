import React from 'react'
import { GridItem, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const IconSkills = ({ reference, color }) => {
  return (
      <GridItem justifySelf="center" my={{base: "2rem", md:"3rem"}}>
        <motion.div
          initial={{ color: "curentColor"}}
          whileTap= {{
            scale: 2.5,
            color: color,
            transition: { duration: 0.5 }
          }}
        >
          <Icon as={reference} w={50} h={50} />
        </motion.div>
      </GridItem>
    
  )
}

export default IconSkills
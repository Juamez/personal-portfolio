import React from 'react';
import { Link, IconButton  } from '@chakra-ui/react'

const IconLink = ({ url, UniqueIcon }) => {
  return (
    <Link mr={6} href={url} target="_blank">
      <IconButton 
        aria-label='Go to ' 
        variant="ghost"
        icon={<UniqueIcon/>} 
        fontSize='30px'
        w={35} 
        h={35} 
      />
    </Link>
  )
}

export default IconLink
import React from 'react';
import { Link, Icon  } from '@chakra-ui/react'

const IconLink = ({ url, UniqueIcon }) => {
  return (
    <Link mr={6} href={url} target="_blank">
      <Icon as={UniqueIcon} w={35} h={35} />
    </Link>
  )
}

export default IconLink
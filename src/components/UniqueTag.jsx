import React from 'react'
import { Tag } from '@chakra-ui/react'

const TagName = ({ labelName }) => {
  return (
    <Tag mr="10px">{labelName}</Tag>
  )
}

export default TagName
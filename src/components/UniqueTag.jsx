import React from 'react'
import { Tag } from '@chakra-ui/react'

const TagName = ({ labelName }) => {
  return (
    <Tag mx="1rem">{labelName}</Tag>
  )
}

export default TagName
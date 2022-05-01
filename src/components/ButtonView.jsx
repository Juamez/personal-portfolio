import { Button, Icon, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const ButtonView = ({ action, icon, href }) => {
  return (
    <Link href={href} target="_blank">
      <Button mx={"1.5rem"} as={motion.button} whileHover={{ scale: 1.1, transition: { duration: 0.1 }}}>
        {action}
        <Icon as={icon} ml={"16px"} />
      </Button>
    </Link>
  )
}

export default ButtonView
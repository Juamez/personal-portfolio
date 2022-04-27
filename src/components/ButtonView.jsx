import { Button, Icon, Link } from '@chakra-ui/react'


const ButtonView = ({ action, icon, href }) => {
  return (
    <Link href={href} target="_blank">
      <Button mr={"30px"}>
        {action}
        <Icon as={icon} ml={"16px"}/>
      </Button>
    </Link>
  )
}

export default ButtonView
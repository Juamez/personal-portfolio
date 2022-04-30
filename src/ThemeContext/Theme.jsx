import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    brand: {
      spaceCadet: "#22e50ff",
      tealBlue: "#007991ff",
      emerald: "#439a86ff",
      cambridgeBlue: "#bcd9c1ff", 
      flax: "#e9d985ff"
    }
  },
  font: {
    font: 'Exo 2'
  }
})

export default Theme
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Theme from './ThemeContext/Theme'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
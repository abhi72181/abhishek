import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {ThemeContextProvider} from "./context/ThemeContexts"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </ThemeContextProvider>
  </React.StrictMode>
)

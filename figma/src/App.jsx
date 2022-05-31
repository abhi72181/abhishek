import { useContext, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Left from './components/Left'
import Right from './components/Right'
import { ThemeContext } from '@emotion/react'
import { ThemeContexts } from './context/ThemeContexts'
function App() {
  const [count, setCount] = useState(0)
  const {theme}=useContext(ThemeContexts)

  return (
    <div className={theme=="light"?"App-l":"App-r"}>
     <Left />
     <Right />
    </div>
  )
}

export default App

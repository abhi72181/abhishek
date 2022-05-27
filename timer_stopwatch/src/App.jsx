import { useState } from 'react'
import Timer from './components/Timer'
import Stopwatch from './components/Stopwatch'
import './App.css'

function App() {
  const [change,setChange] = useState("")

  return (
    <div className="App">
      <button onClick={()=>setChange(true)}>Timer</button>
      <button onClick={()=>setChange(false)}>stopwatch</button>
      {change?<Timer/>:<Stopwatch/>}
      
    </div>
  )
}

export default App

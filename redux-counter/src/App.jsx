import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { add,  divide, multiply, sub } from './action'

function App() {
const [data,setData]=useState(0)
  const dispatch=useDispatch()
  const count=useSelector((state)=>state.count)
  const handleChange=(e)=>{
   setData(e.target.value)
  }
  return (
    <div className="App">
      <input type="number" placeholder='Enter number' onChange={handleChange} />
      <h1>calculator:{count}</h1>
      <button  onClick={()=>dispatch(add({payload:1}))} >increment</button>
      <button onClick={()=>dispatch(sub({payload:1}))}>decrement</button>
      <button onClick={()=>dispatch(add({payload:+(data)}))}>+</button>
      <button onClick={()=>dispatch(sub({payload:+(data)}))}>-</button>
      <button onClick={()=>dispatch(multiply({payload:+(data)}))}>*</button>
      <button onClick={()=>dispatch(divide({payload:+(data)}))}>/</button>
    </div>
  )
}

export default App

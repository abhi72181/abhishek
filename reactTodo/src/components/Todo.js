import React from 'react'
import { useState } from 'react'


export  function Todo({getData}) {
    const [text, setText] = useState("")
    const handleChange =(e)=>{

        setText(e.target.value)
    }
  return (
    <div >
  <div >
  <input type="text"  onChange={handleChange} placeholder="Add Todos"  />
  <button  type="button" onClick={()=>{
      getData(text);
    
  }} >Add Todo</button>
</div>

    </div>
  )
}

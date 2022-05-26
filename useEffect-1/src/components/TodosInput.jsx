import React, { useState } from 'react'

const TodosInput = ({cb}) => {
    const [value,setValue]=useState("")
   

  return (
    <div>
        <input type="text" placeholder='enter todo...'  onChange={(e)=>setValue(e.target.value)} />
        <button onClick={()=>cb(value)}>Save</button>
    </div>
  )
}

export default TodosInput
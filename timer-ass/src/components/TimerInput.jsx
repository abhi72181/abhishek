import React, { useState } from 'react'

const TimerInput = ({starting,ending,setCheck,check}) => {
    const [initial,setInitial]=useState(0)
    const [final,setFinal]=useState(10)
  return (
    <div>
        <input type="number" placeholder='Enter Start time' onChange={(e)=>setInitial(+(e.target.value))} />
        <br />
        <input type="number" placeholder='Enter End time' onChange={(e)=>setFinal(+(e.target.value))}/>
        <br /><br />
        <button onClick={()=>{
            starting(initial)
            ending(final)
            setCheck(!check)
        }}>submit</button>
    </div>
  )
}

export default TimerInput
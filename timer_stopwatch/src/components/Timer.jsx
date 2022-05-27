import React, { useState } from 'react'
import "./Timer.css"
function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
// console.log(msToTime(300000))
const Timer = () => {
   const [timers,setTimers]=useState(0)
   const [addinput,setAddinput]=useState("")
   let [timerid,setTimerid]=useState(null)
   const [checking,setChecking]=useState(true)
   const handleChange=(e)=>{
     setAddinput(e.target.value)
   }
   
 
    
   
  
    const startTimer=()=>{
     
     if(!timerid){
       if(timers<=2000){
        clearInterval(timerid)
       }
       else{
        let id=setInterval(()=>{
          setTimers((prev)=>prev-1000)
       },1000)
       setTimerid(id)
     }
     setChecking(false)
    }
       }
      

    const stopTimer=()=>{
    
      clearInterval(timerid)
      setTimerid(null)
      setChecking(true)
    }
    const resetTimer=()=>{
      clearInterval(timerid)
      setTimers(0)
    }
  return (
    <div className='main-timer'>
      <input type="number" placeholder='enter seconds' onChange={handleChange} />
      <button onClick={()=>setTimers(addinput)}>Add</button>
      <h2>{msToTime(timers)}</h2>
      {checking ? <button onClick={startTimer}>start</button>:<button onClick={stopTimer}>stop</button>}
      
      
      <button onClick={resetTimer}>reset</button>
    </div>
  )
}

export default Timer
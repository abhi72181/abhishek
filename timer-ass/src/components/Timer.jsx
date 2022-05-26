import React, { useEffect, useState } from "react";

const Timer = ({ start, end, check ,setStart}) => {
  // const [counterStart, setCounterStart] = useState(start);
  // const [counterEnd, setCounterEnd] = useState(end);

  // let [timerId, setTimerId] = useState("");
 
  // useEffect(() => {
    
    
  //   // console.log(counterStart,counterEnd,"inside-use" );
  // }, []);

  // // console.log(counterStart,counterEnd ,"outside");

  

  useEffect(() => {
    
     if (check) {
      let id = setInterval(() => {
        if (start >= end) {
          clearInterval(id);
        } else {
          setStart((prev) => prev + 1);
        }
      }, 1000);
      console.log("inside useeffect")
    
 
      return () => {
        clearInterval(id);
      };
    
    }
    
  }, [start,check]);

  console.log("outside useeffect",check);
  return (
    <div>
      <h2>Timer</h2>
      <h1>{start}</h1>
      <h1>{end}</h1>
    </div>
  );
};

export default Timer;

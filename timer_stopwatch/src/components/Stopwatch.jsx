import React, { useEffect, useRef, useState } from "react";
import "./Stopwatch.css";
function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
// console.log(msToTime(300000))

const Stopwatch = () => {
  const [time, setTime] = useState(1000);
  let [timeid, setTimeid] = useState(null);
  const [check, setCheck] = useState(true);

  const startStopwatch = () => {
    if (!timeid) {
      
        clearInterval(timeid);
      
        let id = setInterval(() => {
          setTime((prev) => prev + 1000);
        }, 1000);
        setTimeid(id);
     
      setCheck(false);
    }
  };

  const stopStopwatch = () => {
    clearInterval(timeid);
    setTimeid(null);
    setCheck(true);
  };
  const resetStopwatch = () => {
    clearInterval(timeid);
    setTime(0);
  };
  console.log(timeid, "timeid");
  return (
    <div className="main-stop">
      <h2>{msToTime(time)}</h2>
      {check ? (
        <button onClick={startStopwatch}>start</button>
      ) : (
        <button onClick={stopStopwatch}>stop</button>
      )}

      <button onClick={resetStopwatch}>reset</button>
    </div>
  );
};

export default Stopwatch;

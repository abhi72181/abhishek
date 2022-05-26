import Timer from "./components/Timer";
import TimerInput from "./components/TimerInput";
import "./App.css";
import { useState } from "react";

function App() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [check, setCheck] = useState(false);

  // console.log("check", check);
  // console.log("start",start);
  // console.log("end",end)

  return (
    <div className="App">
      <TimerInput
        starting={setStart}
        ending={setEnd}
        setCheck={setCheck}
        check={check}
      />

      <Timer start={start} end={end} check={check}  setStart={setStart}/>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import { Tododetails } from "./components/Tododetails";
import styled from "styled-components"
import { useState } from "react";

const Wrapper=styled.div`
  background-color:${(props)=>props.theme==="light"?"green":"orange"};
`
// ${(props)=>props.theme==="light" ? "#f6f54d" : "#143f6b"};
function App() {
  const [theme,setTheme]=useState("light")
  const changeTheme=()=>{
    setTheme(theme==="light"?"dark":"light")
  }
  return (
    <Wrapper theme={theme}>
    <div>
      <button onClick={changeTheme}>Toggle Theme</button>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/todo/:id" element={<Tododetails />}></Route>
      </Routes>
    </div>
    </Wrapper>
  );
}

export default App;

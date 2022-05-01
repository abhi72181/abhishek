import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import { Tododetails } from "./components/Tododetails";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/todo/:id" element={<Tododetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;

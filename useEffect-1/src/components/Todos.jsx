import React, { useState, useEffect } from "react";
import TodosInput from "./TodosInput";
import TodosList from "./TodosList";
import TodosItem from "./TodosItem";
import axios from "axios";
const Todos = () => {
  //   const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [page,setPage]=useState(2)
  const [limit,setLimit]=useState(4)
  const [totalpages,setTotalpages]=useState(1)
  const cb = (newTodo) => {
    setTodos([...todos, { text: newTodo, isDone: "false" }]);
    fetch("http://localhost:8080/todos",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({ text: newTodo, isDone: "false" })
    }).then(()=>{
      getData()
    })
  };

  const deleteTodo=(myKey)=>{
     setTodos(todos.filter((e)=> e.id !== myKey)) 
  }

  async function getData() {
    var d = await axios.get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`);
    console.log(d,"d")
    setTodos(d.data);
    setTotalpages(+(d.headers["x-total-count"]))
  }

  useEffect(() => {
    getData();
  }, [page,limit]);

  const handleClick=(e)=>{
    console.log("hello",page)
      setPage(page+e)
  }

  // console.log(totalpages,"total")

  return (
    <div>
      <TodosInput cb={cb} />
      <TodosList>
        {todos.map((e) => (
          <TodosItem key={e.id} myKey={e.id} e={e} deleteTodo={deleteTodo}/>
        ))}
      </TodosList>
      <button disabled={page<=1 ? true:false} onClick={()=>handleClick(-1)}>prev</button>
      <button disabled={page>=Math.ceil(totalpages/limit)?true:false} onClick={()=>handleClick(+1)}>next</button>
    </div>
  );
};

export default Todos;

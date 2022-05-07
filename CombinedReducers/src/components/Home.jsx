import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../Redux/Todo/action";

import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Home() {

    const dispatch = useDispatch();
    const todos = useSelector(store => store.todos.todos);

    const [text, setText] = useState();
    const handleChange = (e) =>{
        setText(e.target.value);
    }
    const handleSubmit = () =>{
        dispatch(addTodo(text));
    }
    const navigate = useNavigate();

    const todoPath = (e) =>{
        console.log(e.target.parentElement.id)
        const path = "/todo/" + e.target.parentElement.id;
        navigate(path);
    }
    const handleDelete = (e) =>{
        console.log(e.target.parentElement.id)
        dispatch(deleteTodo(e.target.parentElement.id));
    }

  return (
    <div>
      
      <input type="text" onChange={handleChange} placeholder ="Add Todo.."/>
      <button onClick={handleSubmit}>Add Todo</button>
      {
          todos.map((elem) =>(
              <div>

        <div key={elem.id} onClick={todoPath}>{elem.id} {elem.title} {elem.status ? "DONE" : "NOT DONE"}</div>
        <button onClick={handleDelete}>Delete</button>
        
          </div>
            ))
      }
    </div>
  )
}

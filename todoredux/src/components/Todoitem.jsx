import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/action";
export const Todoitem = ({ title, id }) => {
    const dispatch=useDispatch()
    const [toggle,setToggle]=useState(false)
    const handleToggle=()=>{
        setToggle(!toggle)
    }

    const handleDelete=(id,title)=>{
       dispatch(deleteTodo(title))
       fetch(`http://localhost:5000/todos/${id}`,{
           method:"DELETE"
       }).then((res)=>res.json().then((result)=>{
           console.log(result)
       }))
    }
  return (
    <div>
      <Link
        to={`/todo/${title}`}
        style={{ textDecoration: toggle ? "line-through" : "" }}
      >
        {title}
      </Link>
      <button onClick={handleToggle}>Toggle</button>
      <button onClick={()=>handleDelete(id,title)}>Delete</button>
      
    </div>
  );
};

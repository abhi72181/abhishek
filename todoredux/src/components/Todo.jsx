import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action";
import { deleteTodo } from "../redux/action";
import { Toggleitem } from "./Toggleitem";
import { Deleteitem } from "./Deleteitem";
import { Todoitem } from "./Todoitem";
// import { store } from "../redux/store"
import { Link } from "react-router-dom";
function Todo() {
  var tp;
  // const [data,setData]=useState([])
  // console.log("store",store)
  const [toggle,setToggle]=useState(false)
  var todos = useSelector((store) => store.todos);
//   console.log("todos", todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    const payload = {
      title: text,
      status: false,
    };
    fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then(() => {
      getData();
    });
    setText("")
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await fetch("http://localhost:5000/todos");
    data = await data.json();
    dispatch(addTodo(data));
  }



  console.log(todos)

  return (
    <div>
      <input
        type="text"
        placeholder="Enter todos"
        id="todo"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleClick}>ADD</button>
    
      {todos.map((e, index) => {
        return (
          <div key={e.id}>
            
                <Todoitem title={e.title} id={e.id}/>
               
              
              {/* <Deleteitem /> */}
            
            <br />
          </div>
        )
      })}
    </div>
  );
}

export default Todo;

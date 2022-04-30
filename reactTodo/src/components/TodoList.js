import React, { useState } from 'react'
import {Todo} from './Todo'
import {DeleteItem} from "./DeleteItem"

export  function TodoList() {
    const [todo, setTodo] = useState([

    ]);
    const getData=(text)=>{
  
      setTodo([...todo, text]);

    }

  return (
    <div>
      <Todo  getData={getData} />
      <div >
      {
         todo.map((elem,index)=>(
            <div >
             <DeleteItem key={index} text={elem}/>
        </div>
         ))
        }
      </div>
    
    </div>
  )
}

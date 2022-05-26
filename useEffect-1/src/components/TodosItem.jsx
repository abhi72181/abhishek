import React from 'react'
import "./TodosItem.css"
const TodosItem = ({e,myKey,deleteTodo}) => {
  return (
    <div className='flex'>
        <div>{e.id}</div>
        <div>{e.text}</div>
        <button onClick={()=>deleteTodo(myKey)}>delete</button>
    </div>
  )
}

export default TodosItem
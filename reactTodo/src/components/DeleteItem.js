import React from 'react'
import {useState} from "react"


export  function DeleteItem(props) {
    const [cut,setCut] = useState(false);

    const handleDelete=()=>{
setCut(true);
    }
  return (
      <div className="todoFlex">
          <div>
          <span  onClick={handleDelete}>
            
            <button>Delete</button>
          </span>
          </div>
      <div>
      <li   style={{textDecoration: cut?"line-through":""}}>{props.text}</li>
      </div>
  
      </div>
   

  )
}

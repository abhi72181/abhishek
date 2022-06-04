import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const NotFound = () => {
    const navigate=useNavigate()
  return (
    <div>
        <h1>
            Error 404 Page not found
          
        </h1>
        <Link to="/">Go to home</Link>
    </div>
  )
}

export default NotFound
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const {isAuth,token}=useContext(AuthContext)
  return (
    <div>
       {isAuth?<div>
        <h1>logged-in-true</h1>
        <h3>token:{token}</h3>
        </div>:<h1>logged-in-false</h1>} 
        
    </div>
  )
}

export default Login
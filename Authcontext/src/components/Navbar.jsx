import React, { useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {setIsAuth,isAuth,setToken}=useContext(AuthContext)
    const handleLogin=()=>{
        async function getData(){
            let data=await axios.post("https://reqres.in/api/login",{email: "eve.holt@reqres.in",
            password: "cityslicka"})
            console.log(data.data.token,"data")
            if(data.data.token){
                setIsAuth(true)
                setToken(data.data.token)
            }
        }
        getData()
    }
  return (
    <div>
        <h1>Navbar</h1>
        {isAuth? <button onClick={()=>setIsAuth(false)}>Logout</button>:<button onClick={handleLogin}>Login</button>}
       
    </div>
  )
}

export default Navbar
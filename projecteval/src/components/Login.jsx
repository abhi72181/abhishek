import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isAuth } from "../Redux/actions";
import { store } from "../Redux/store";
export const Login = () => {
  const dispatch=useDispatch()
  const [userData, setUserData]=useState({
    username:"",
    password:""
  })
  const [backdatauser,setBackdatauser]=useState([])

  const handleChange=(e)=>{
    setUserData({
      ...userData,[e.target.name]:e.target.value
    })
  }
  // const navigate=useNavigate()
  // console.log(userData.username,userData.password)
  // useEffect(()=>{
  //   getData()
  // },[])


  // console.log("data1",backdatauser)
  async function getData(){
    let data=await fetch("http://localhost:8080/users")
    data=await data.json()
    setBackdatauser(data)
    console.log("data",backdatauser)
  }
  const handleClick=()=>{
    getData()
   
     
    
    // console.log()
    // let filtered=backdatauser.filter((e)=>e.username===userData.username)
    // //  if(userData.username===backdatauser.username&&userData.password===backdatauser.pass){
    // //     console.log("admin",store.getState())
    // //      dispatch(isAuth(true))
    // //      console.log("admin",store.getState())
    // //    }
    // //    else{
    // //      dispatch(isAuth(false))
    // //    }
    // console.log("filtered",filtered)
     }
  
  
  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handleChange}
        value={userData.username}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
        value={userData.password}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={handleClick}>Login</button>
    </div>
  );
};

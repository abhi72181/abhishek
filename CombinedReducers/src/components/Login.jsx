import { useDispatch } from "react-redux";
import { statusOfUser } from "../Redux/Authentication/action";


import { useNavigate } from "react-router-dom";
import { useState } from "react";


export const LogIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username : null,
        password : null
    });

    const [logInFailed, setLogInFailed] = useState(null);

    const handleChange = (e) =>{
        setUserData ( {
            ...userData, [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLogInFailed(" LOGGING USER IN")
        fetch("https://reqres.in/api/login", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    // if credentials are wrong
                    setLogInFailed("Login Unsuccessfull");
                    return;
                }
            //if login became sucessfull store the token in local storage
            localStorage.setItem("Token_Auth", data.token );
              dispatch(statusOfUser(data.token));
            //changing the status of user 
            navigate(-2, {replace: true});
        });
  
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username"
            onChange={handleChange} />
            <input type="text"onChange={handleChange} placeholder= "password" />
            <input type="submit" value="Submit" />
        </form>
        
        {logInFailed}
        
        
        </>
    )
}
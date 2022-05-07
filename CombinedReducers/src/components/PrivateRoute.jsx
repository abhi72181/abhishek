import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

export const PrivateRoute = ({children}) =>{
    const status = useSelector(store => store.auth.isLoggedIn);
    if( status === false && children.type.name === "Login"){
        return children;
    }
    if( status === false){
        return <Navigate to ={"/login"} />
    }
    if(status === true && children.type.name === "Login"){
        //if user is already logged in 
        return<Navigate to ={"/"} />;
    }
    return children;
}



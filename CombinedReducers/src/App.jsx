import { useDispatch } from "react-redux";
import { Routes,Route  } from "react-router-dom";
import Home from "./components/Home";
import { LogIn } from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import Todos from "./components/Todos";
import { statusOfUser } from "./Redux/Authentication/action";


function App(){
  const authToken = localStorage.getItem("Token_Auth");
  const dispatch = useDispatch();
  dispatch(statusOfUser(authToken));

  return (
    <div className ="App">

      <Routes>
        <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}></Route>
        <Route path="/todo/:id" element={<PrivateRoute><Todos/></PrivateRoute>}></Route>
        <Route path="/login" element={<PrivateRoute><LogIn/></PrivateRoute>}></Route>
      </Routes>
    </div>
  );
}
export default App;
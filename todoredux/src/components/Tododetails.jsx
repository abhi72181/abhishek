// import { store } from "../redux/store"
// console.log("get",store.getState())
import { useParams } from "react-router-dom"
export const Tododetails=()=>{
    const {id}=useParams()
    return <>
    <div>
        {`Hi there you have to ${id}`}
    </div>
    </>
}
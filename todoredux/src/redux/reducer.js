import { ADD_TODO } from "./action"
import { DELETE_TODO } from "./action"
const init={todos:[]}
export const todoReducer=(store=init,{type,payload})=>{
    console.log("payoad",payload,type)
    switch(type){
        case ADD_TODO:
        return {...store,todos:payload}
         case DELETE_TODO:
           const newList=  store.todos.filter((elem)=>elem.title!==payload)
           console.log("newlist",newList)
             return {...store,todos:newList}
        default: return store
    }
}
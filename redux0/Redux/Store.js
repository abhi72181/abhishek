import { legacy_createStore as createStore } from "redux";
import { ADD_TODO } from "./action";
import { DELETE_TODO } from "./action";
const initState = {
  Todo: [],
};

export const reducer = (store, {type,payload}) => {
    switch (type) {
        case ADD_TODO : return { ...store, Todo: [...store.Todo, payload] }
        case DELETE_TODO : 
        // console.log("sttodo",store.Todo[0].title)
        const newList=store.Todo.filter((elem)=>elem.title!==payload.title)
        return { ...store, Todo: newList }
        default : return store
    }
}

export const store = createStore(reducer,initState)



 console.log("Store", store.getState());
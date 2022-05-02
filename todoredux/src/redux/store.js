import {legacy_createStore as createStore} from "redux"
import { todoReducer } from "./reducer"

export const store=createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// {todos:[]}
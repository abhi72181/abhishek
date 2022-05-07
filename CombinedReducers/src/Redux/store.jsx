import { legacy_createStore as createStore, combineReducers } from "redux";

import { authenticationReducer } from "./Authentication/reducer";
import { todoReducer } from "./Todo/reducers";

const rootReducer = combineReducers({
    auth: authenticationReducer,
    todos: todoReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


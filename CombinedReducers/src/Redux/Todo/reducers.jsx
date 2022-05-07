import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./action"

import { nanoid } from "nanoid";

const init = {
    todos : []
};

export const todoReducer = (store = init, {type, payload}) => {
    switch (type) {
        case ADD_TODO : return {
            ...store, todos : [...store.todos, {title : payload, status : false, id : nanoid() }]
        };
        case TOGGLE_TODO : return {
            ...store, todos : [...store.todos.map((elem) => {
               if( elem.id === payload){
                   elem.status = !elem.status;
                //    return elem;
               }
            //    return elem;
            })
        ]
        };
        case DELETE_TODO : return {
            ...store, todos : [...store.todos.filter ( elem => elem.id !== payload)
            ]
        }
        default : return {...store};
    }
}
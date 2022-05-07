export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

//function for toggling od the status 

export const toggleTodo = (data) => {
 return {
      type : TOGGLE_TODO,
      payload : data
 }
};

//function for deletion of the todod

export const deleteTodo = (data) =>{
    return {
        type : DELETE_TODO,
        payload : data
    }
};

//function for adding up the todos

export const addTodo = (data) =>{
    return {
        type : ADD_TODO,
        payload : data
    }
};
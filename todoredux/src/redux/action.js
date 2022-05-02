export const ADD_TODO="ADD_TODO"
export const DELETE_TODO="DELETE_TODO"
export const addTodo=(data)=>{
    return {
        type:ADD_TODO,
        payload:data
    }
    
}
export const deleteTodo=(data)=>{
    return {
        type:DELETE_TODO,
        payload:data
    }
    
}
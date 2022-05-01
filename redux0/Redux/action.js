export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    payload: {
      title: title,
      status: false,
    },
  };
};

export const deleteTodo = (title) => {
  return {
    type: DELETE_TODO,
    payload: {
      title: title,
      status: false,
    },
  };
};

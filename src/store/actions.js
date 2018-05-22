export const SET_USER = 'Set new user';
export const UPDATE_USER = 'Update user';
export const REMOVE_USER = 'Remove user';
export const setUser = (data) => ({ type: SET_USER, data });
export const updateUser = (data) => ({ type: UPDATE_USER, data });
export const removeUser = (data) => ({ type: REMOVE_USER });


export const ADD_TASK = 'Add new task';
export const addTodo = task => ({ type: ADD_TASK, task });

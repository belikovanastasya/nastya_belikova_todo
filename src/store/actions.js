export const SET_USER = 'Set new user';
export const UPDATE_USER = 'Update user';
export const REMOVE_USER = 'Remove user';
export const setUser = (data) => ({ type: SET_USER, data });
export const updateUser = (data) => ({ type: UPDATE_USER, data });
export const removeUser = () => ({ type: REMOVE_USER });


export const ADD_TASK = 'Add new task';
export const SET_TASK = 'Set task';
export const UPDATE_TASK = 'Update task';
export const addTask = task => ({ type: ADD_TASK, task });
export const setTask = task => ({ type: SET_TASK, task });
export const updateTask = task => ({ type: UPDATE_TASK, task });


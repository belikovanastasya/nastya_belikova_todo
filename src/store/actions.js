export const SET_USER = 'Set new user';
export const UPDATE_USER = 'Update user';
export const REMOVE_USER = 'Remove user';
export const setUser = (data) => ({ type: SET_USER, data });
export const updateUser = (data) => ({ type: UPDATE_USER, data });
export const removeUser = () => ({ type: REMOVE_USER });

export const GET_TASKLIST = 'Get tasklist';
export const SET_TASK = 'Add new task';
export const CREATE_TASK = 'Set task';
export const UPDATE_TASKLIST = 'Update tasklist after update task';
export const UPDATE_CURRENT_TASK = 'Update current task';
export const DELETE_TASK = 'Delete current task';
export const getTaskList = data =>({type: GET_TASKLIST, data})
export const updateTaskList = data => ({ type: UPDATE_TASKLIST, data });
export const deleteCurrentTask = data => ({ type: DELETE_TASK, data });
export const setTask = data => ({ type: SET_TASK, data });
export const createTask = data => ({ type: CREATE_TASK, data });
export const updateCurrentTask = data => ({ type: UPDATE_CURRENT_TASK, data });


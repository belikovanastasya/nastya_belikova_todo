import { SET_USER, UPDATE_USER, REMOVE_USER, GET_TASKLIST, UPDATE_TASKLIST, CREATE_TASK, SET_TASK, UPDATE_CURRENT_TASK, DELETE_TASK } from './actions';

export const user = (state = false, { type, data}) => {
  switch (type) {
    case UPDATE_USER:
    case SET_USER: {
      return data;
    }
    case REMOVE_USER:
      return null;
  }
  return state;
};

export const taskList = (state = [], { type, data = [] }) => {
  switch (type) {
    case GET_TASKLIST: {
      return data;
    } 
    case UPDATE_TASKLIST: {
      const tasksInWeek = [...state];
      tasksInWeek[data.day].forEach(task => {
        if(task.id === data.id) {
          task = data
        }
      });
      return tasksInWeek;
    }  
    case DELETE_TASK: {
      const tasksInWeek = [...state];
      const tasks = tasksInWeek[data.day].filter(task => task.id !== data.id);
      tasksInWeek[data.day] = tasks;
      return tasksInWeek;
    }  
  }
  return state; 
}

export const current_task = (state = {}, { type, data = {} }) => {
  switch (type) {
    case UPDATE_CURRENT_TASK: {
      const updatedTask = Object.assign({}, state, data);
      return updatedTask; 
    } 
    case CREATE_TASK:
    case SET_TASK: {
      return data;
    }
  }
  return state;
};
 
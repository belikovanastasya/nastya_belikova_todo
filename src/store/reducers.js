import { SET_USER, UPDATE_USER, REMOVE_USER, ADD_TASK, SET_TASK, UPDATE_TASK } from './actions';

// it is typical reducer
// action should be an object with next pattern:
// { type: 'ACTION_NAME', payload?: any_js_value }
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

export const task = (state = { title: '', description: '', id: null }, action) => {
  switch (action.type) {
    case ADD_TASK:
    case SET_TASK:
    case UPDATE_TASK: {
      const newState = [...state, action.task];
      console.log(newState)
      return newState;
    }
  }

  return state;
};
 
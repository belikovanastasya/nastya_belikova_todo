import { SET_USER, UPDATE_USER, REMOVE_USER } from './actions';

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

// export const todo = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TASK: {
//       const newState = [...state, action.task];
//       return newState;
//     }
//   }

//   return state;
// };
 
import { combineReducers } from 'redux';
import { preload } from './actions';

//Reducer for preloading
const dataReducer = (state = {}, action) => {
  switch(action.type) {
    case "PRELOAD_DATA":
      return action.data;
    default: return state;
  }
}

//Combines all reducers
const reducer = combineReducers({
  data: dataReducer
});

export default reducer;

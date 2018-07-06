import { combineReducers } from 'redux';
import { preload } from './actions';

const dataReducer = (state = {}, action) => {
  switch(action.type) {
    case "PRELOAD_DATA":
      return action.data;
    default: return state;
  }
}

const reducer = combineReducers({
  data: dataReducer
});

export default reducer;

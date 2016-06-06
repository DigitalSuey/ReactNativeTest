import { combineReducers } from 'redux'; // might need to remove

const defaultState = {
  isLoading: false,
  data: [],
  error: false,
};

function moviesReducer(state = defaultState, action = null) {
  switch (action.type) {
    case 'SEARCH_FAILURE':
      return Object.assign({}, state, { isLoading: false, data: action.data, error: true });
    case 'SEARCH_SUCCESS':
      return Object.assign({}, state, { isLoading: false, data: action.data, error: false });
    case 'SEARCH_LOADING':
      return Object.assign({}, state, { isLoading: true, data: [], error: false });
    default:
      return state;
  }
}

export default combineReducers({
  movies: moviesReducer,
});

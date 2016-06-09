import movieService from '../services/movieService';

// Another simple pure action creator
function searchSuccess(data) {
  return { type: 'SEARCH_SUCCESS', data };
}

// Simple pure action creator
function searchFailure(data) {
  return { type: 'SEARCH_FAILURE', data };
}

// Side effect: uses thunk middleware
export default function search(query) {
  return dispatch => {
    movieService.fetchData(query).then(
      json => dispatch(searchSuccess(json)),
      error => dispatch(searchFailure(error))
    );
  };
}

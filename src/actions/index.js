import movieService from '../services/movieService';

// Another simple pure action creator
function searchSuccess(data) {
  console.log('success', data);
  return { type: 'SEARCH_SUCCESS', data };
}

// Simple pure action creator
function searchFailure(data) {
  console.log('fail', data);
  return { type: 'SEARCH_FAILURE', data };
}

// Side effect: uses thunk middleware
export default function search(query) {
  console.log('query', query);

  return dispatch => {
    movieService.fetchData(query).then(
      json => dispatch(searchSuccess(json)),
      error => dispatch(searchFailure(error))
    );
  };
}

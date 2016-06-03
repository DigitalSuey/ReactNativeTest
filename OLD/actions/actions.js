import * as types from './actionTypes';

function requestData() {
	return {
    type: types.REQ_DATA
  };
};

function receiveData(json) {
	return {
		type: types.RECV_DATA,
		data: json
	};
};

function receiveError(json) {
	return {
		type: types.RECV_ERROR,
		data: json
	};
};

export function fetchData(url) {
	return function(dispatch) {
		dispatch(requestData());

    function resolve(responseData) {
      dispatch(receiveData(responseData.results));
      console.log(responseData.results);
    }

    function reject() {
      dispatch(receiveError(responseData.results));
    }

    return fetch(url)
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
	}
};

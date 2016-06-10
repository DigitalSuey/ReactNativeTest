const API_URL = 'https://itunes.apple.com/search';

function urlForQuery(query) {
  if (query && query.length > 2) {
    return `${API_URL}?media=movie&term=${encodeURIComponent(query)}`;
  }

  return `${API_URL}?media=movie&term=alien`;
}

function fetchData(query) {
  const url = urlForQuery(query);

  return fetch(url)
    .then(response => response.json())
    .then((response) => response.results.filter((e) => e.wrapperType !== 'collection'))
    .catch(response => console.log('ERROR', response));
}

export default { fetchData };

export const searchTermChanged = newTerm => ({
  type: 'SEARCH_TERM_CHANGED',
  term: newTerm,
  loading: false
});

export const startSearch = term => ({
  type: 'START_SEARCH',
  loading: true
});

export const clearSearch = () => ({
  type: 'CLEAR_SEARCH',
  term: '',
  loading: false
});

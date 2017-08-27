const initialState = {
  term: '',
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return Object.assign({}, state, { loading: action.loading });
    case 'SEARCH_TERM_CHANGED':
      return Object.assign({}, state, { loading: action.loading, term: action.term });
    case 'CLEAR':
      return Object.assign({}, state, { loading: action.loading, term: action.term });
    default:
      return state;
  }
};

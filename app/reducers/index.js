export default (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'SEARCH':
      return Object.assign({}, state, { loading: true });
    case 'SEARCH_TERM_CHANGED':
      return Object.assign({}, state, { loading: false, term: action.term });
    case 'CLEAR':
      return Object.assign({}, state, { loading: false, term: '' });
    default:
      return state;
  }
};

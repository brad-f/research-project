import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

const SearchPanel = ({ term, loading, onTermChanged, onSearchClick, onClearClick }) => (
  <div>
    <SearchBar 
      term={term} 
      loading={loading} 
      onTermChanged={onTermChanged}
      onSearchClick={onSearchClick}
      onClearClick={onClearClick}
      />
  </div>
);

const mapStateToProps = state => {
  return {
    term: state.term || '', //todo: fix
    loading: state.loading || false
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTermChanged: term => {
      dispatch({ type: 'SEARCH_TERM_CHANGED', term, loading: false })
    },
    onSearchClick: () => {
      dispatch({ type: 'SEARCH', loading: true })
    },
    onClearClick: () => {
      dispatch({ type: 'CLEAR', term: '', loading: false });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanel);

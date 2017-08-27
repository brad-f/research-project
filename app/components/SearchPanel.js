import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import * as actions from '../actions';

const SearchPanel = ({ term, loading, onTermChanged, onSearchClick, onClearClick }) => (
  <SearchBar
    term={term}
    loading={loading}
    onTermChanged={onTermChanged}
    onSearchClick={onSearchClick}
    onClearClick={onClearClick}
    />
);

const mapStateToProps = state => {
  return {
    term: state.term,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTermChanged: term => {
      dispatch(actions.searchTermChanged(term))
    },
    onSearchClick: () => {
      dispatch(actions.startSearch())
    },
    onClearClick: () => {
      dispatch(actions.clearSearch());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanel);

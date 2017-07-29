import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const Spinner = ({ loading }) => (
  loading ? (
    <span>
      <i className="fa fa-refresh fa-spin fa-3x fa-fw loading"></i>
      <span className="sr-only">Loading...</span>
    </span>
  ) : null
);

const SearchBar = ({ term, loading, onTermChanged, onSearchClick, onClearClick }) => (
  <div className="row align-items-center search-panel">
    <div className="col-sm-8">
      <TextField name="query"
        hintText="Search Index"
        fullWidth={true}
        value={term}
        onChange={(evt, value) => onTermChanged(value)} />
    </div>
    <div className="col-sm-4">
      <RaisedButton 
        style={{margin: '1rem 1rem 0rem 0rem'}} 
        label="SEARCH" primary={true} 
        onTouchTap={onSearchClick} />
      <RaisedButton
        style={{margin: '1rem 1rem 0rem 0rem'}}
        label="CLEAR"
        secondary={true} 
        onTouchTap={onClearClick} />
      <Spinner loading={loading} />
    </div>
  </div>
);

SearchBar.propTypes = {
  onTermChanged: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  onClearClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  term: PropTypes.string.isRequired
};

export default SearchBar;

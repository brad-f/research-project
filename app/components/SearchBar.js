import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import Grid from 'material-ui/Grid';
import Input from 'material-ui/Input';
import Typography from 'material-ui/Typography';

const Progress = ({ loading }) => (
  loading ? (<CircularProgress />) : null
);

const SearchBar = ({ term, loading, onTermChanged, onSearchClick, onClearClick }) => (
  <div>
    <Grid container align="center" justify="center">
      <Grid item xs={6}>
        <Input
          type="text"
          value={term}
          fullWidth={true}
          onChange={e => onTermChanged(e.target.value)} />
      </Grid>
    </Grid>
    <br />
    <Grid container align="center" justify="center">
      <Grid item xs={1}>
        <Button raised color="primary"
          onTouchTap={onSearchClick}
          style={{ textAlign: 'center' }}>
          <Typography>
            SEARCH
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={1}>
        <Button raised color="accent"
          onTouchTap={onClearClick}
          style={{ textAlign: 'center' }}>
          <Typography>
            CLEAR
          </Typography>
        </Button>
      </Grid>
    </Grid>
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

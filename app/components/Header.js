import React from 'react';
import AppBar from 'material-ui/AppBar';

export default () => (
  <div className="row">
    <div className="col">
      <AppBar title="Research Project" 
        showMenuIconButton={ false }
        style={{ paddingLeft: '1rem' }} 
        />
    </div>
  </div>
);

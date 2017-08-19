import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from './theme';
import App from './components/App';

require('./index.css');

const Main = () => (
  <Provider store={createStore(reducers)}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>
);

injectTapEventPlugin();

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from './theme';
import App from './components/App';

const initialState = {
  term: '',
  loading: false
};
const store = createStore(reducers, initialState);

const Main = () => (
  <Provider store={store}>
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

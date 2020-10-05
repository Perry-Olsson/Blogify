import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
// import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';
import App from './app/App';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

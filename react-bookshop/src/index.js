import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import createStore from './redux/store';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'

const store=createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
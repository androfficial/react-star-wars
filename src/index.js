import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '@redux/store';
import App from '@components/App';
import ThemeProvider from '@context/ThemeProvider';

import '@styles/style.module.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
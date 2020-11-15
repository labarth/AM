import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import { store, history } from './modules/Main/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <GlobalStyles />
    <App />
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

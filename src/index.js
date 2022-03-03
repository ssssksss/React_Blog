import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import history from './util/history';
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from './GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter history={history}>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// 리액트 성능을 측정하기 위한 것이라는데 아직 잘 모르겠다.
reportWebVitals();

import React from 'react';
import { GlobalStyle } from './styles/global';
import { Routes } from './routes/routes';
import './assets/scss/themes.scss';

export function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Routes />
    </React.Fragment>
  );
}

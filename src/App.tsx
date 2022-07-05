import React from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global';
import { Routes } from './routes/routes';

Modal.setAppElement('#root');

export function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Routes />
    </React.Fragment>
  );
}

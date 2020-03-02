import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes />
    <Footer />
  </BrowserRouter>
);

export default App;

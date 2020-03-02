import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Loading />
    <Footer />
  </>
);

export default App;

import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import Header from './components/Header'
function App() {
  return (
    <>
      <Header/>
      <Layout/>
      <GlobalStyles/>
    </>
  );
}

export default App;

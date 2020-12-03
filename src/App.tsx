import React from 'react';
import Router from 'src/components/common/Router';
import GlobalStyle from 'src/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router></Router>
    </>
  );
};

export default App;

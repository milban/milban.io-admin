import ReactDOM from 'react-dom';
import React from 'react';
import App from 'src/App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById('root'),
);

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'src/page/Home';
import Login from 'src/page/SignIn';

const Router: React.FC = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
      {children}
    </>
  );
};

export default Router;

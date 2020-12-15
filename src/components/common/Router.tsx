import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'src/pages/HomePage';
import SignInPage from 'src/pages/SignInPage';
import { PathName } from 'src/constants/pathName';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path={PathName.HOME}>
        <HomePage />
      </Route>
      <Route path={PathName.SIGN_IN}>
        <SignInPage />
      </Route>
    </Switch>
  );
};

export default Router;

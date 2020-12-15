import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'src/pages/Home';
import SignIn from 'src/pages/SignIn';
import { PathName } from 'src/constants/pathName';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path={PathName.HOME}>
        <Home />
      </Route>
      <Route path={PathName.SIGN_IN}>
        <SignIn />
      </Route>
    </Switch>
  );
};

export default Router;

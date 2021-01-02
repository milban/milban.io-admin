import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'src/pages/HomePage';
import SignInPage from 'src/pages/SignInPage';
import { PathName } from 'src/constants/pathName';
import DefaultLayout from 'src/components/Layout/DefaultLayout';
import Page from 'src/components/common/Page';
import PostsPage from 'src/pages/PostsPage';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path={PathName.HOME}>
        <DefaultLayout>
          <Page>
            <HomePage />
          </Page>
        </DefaultLayout>
      </Route>
      <Route path={PathName.SIGN_IN}>
        <DefaultLayout>
          <Page>
            <SignInPage />
          </Page>
        </DefaultLayout>
      </Route>
      <Route path={PathName.POSTS}>
        <DefaultLayout>
          <Page>
            <PostsPage />
          </Page>
        </DefaultLayout>
      </Route>
    </Switch>
  );
};

export default Router;

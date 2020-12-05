import React from 'react';
import Page from 'src/components/common/Page';
import DefaultLayout from 'src/components/Layout/DefaultLayout';

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <Page>home</Page>
    </DefaultLayout>
  );
};

export default Home;

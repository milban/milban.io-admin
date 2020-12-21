import React from 'react';
import Page from 'src/components/common/Page';
import DefaultLayout from 'src/components/Layout/DefaultLayout';
import Button from 'src/components/common/Button';

const HomePage: React.FC = () => {
  return (
    <DefaultLayout>
      <Page>home</Page>
      <Button>Default</Button>
      <Button appearance="main">Main</Button>
      <Button appearance="point">Point</Button>
      <Button appearance="danger">Danger</Button>
    </DefaultLayout>
  );
};

export default HomePage;

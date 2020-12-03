import React from 'react';
import Nav from 'src/components/common/Nav';

const Page: React.FC = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Page;

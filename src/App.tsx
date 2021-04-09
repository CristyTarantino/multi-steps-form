import React from 'react';
import Layout from 'components/layout';
import SignUp from 'components/pages/sign-up';

const App: React.FC = (): JSX.Element => (
  <div className="App">
    <Layout>
      <SignUp />
    </Layout>
  </div>
);

export default App;

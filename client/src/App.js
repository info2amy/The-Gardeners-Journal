import { useState } from 'react';
import Layout from './layouts/Layout';

function App() {
  const [currentUser, setCurrentUser] = useState(null);








  return (
    <Layout currentUser={currentUser}>
      <h1>Congratulations!  So far, so good 😃</h1>
    </Layout>
  );
};

export default App;
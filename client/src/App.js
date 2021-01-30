import { useState } from 'react';
import { Switch, useHistory, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Register from './screens/Register';
import Login from "./screens/Login";
import { loginUser, registerUser } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/')
}

const handleRegister = async (registerData) => {
  const userData = await registerUser(registerData);
  setCurrentUser(userData);
  history.push('/')
}




  return (
    <Layout currentUser={currentUser}>
      <Switch>
        <Route path='/login'>
          <Login
            handleLogin={handleLogin} />
        </Route>
        <Route path='/register'>
          <Register
            handleRegister={handleRegister}/>
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
import { useEffect, useState } from 'react';
import { Switch, useHistory, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Register from './screens/Register';
import Login from "./screens/Login";
import Home from "./containers/MainCon";
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/plants')
}

const handleRegister = async (registerData) => {
  const userData = await registerUser(registerData);
  setCurrentUser(userData);
  history.push('/plants')
}

const handleLogout = () => {
  setCurrentUser(null);
  localStorage.removeItem('authToken');
  removeToken();
  history.push('/')
}

  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
      {currentUser ? null : (<><h1>WELCOME!</h1>
      <h3>Please login or register <br></br> to begin browsing Plants</h3></>)}
      <Switch>
        <Route path='/login'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path='/register'>
          <Register handleRegister={handleRegister}/>
        </Route>
        <Route path='/'>
          <Home currentUser={currentUser}/>
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
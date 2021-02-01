import {React, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
  }));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <br />
      <Link to="/register">New User? Register here</Link>
      <br /> <br />
      <h3>Login</h3>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <br /> <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <br /> <br /> <br /> 
      <button>Submit</button>
      <br />
      {/* <Link to="/register">New User? Register here</Link> */}
    </form>
  );
}

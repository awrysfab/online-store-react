import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './login.css';

import { setToken } from "../../utils/Common";

function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!(email && password)) return;
    setToken(`${btoa(email)}:${btoa(password)}`);
    history.push('/');
  };

  return (
    <div className="Login">
      <form onSubmit={handleLogin}>
        <div className="form-group" size="lg" controlId="email">
          <label for="email">Email</label>
          <input className="form-control"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group" size="lg" controlId="password">
          <label for="password">Password</label>
          <input className="form-control"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login;
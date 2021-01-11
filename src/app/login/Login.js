import React from "react";
import { useField } from "../../hooks/index";
import { loginUser } from "../../reducers/userReducer";
import { useDispatch } from "react-redux";

import { StyledInput } from "../../components/styledComponents";
import { Button } from "react-bootstrap";
import "./login.css";

const Login = () => {
  const dispatch = useDispatch();
  const [username, resetUsername] = useField("text", "username");
  const [password, resetPassword] = useField("password", "password");

  const handleLogin = async event => {
    event.preventDefault();
    dispatch(loginUser(username.value, password.value));
    resetUsername();
    resetPassword();
  };

  return (
    <div className="loginForm-cy">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className='field'>
          <label>username</label>
          <StyledInput style={{ height: "2em", width: "17em" }} { ...username } />
        </div>
        <div className='field'>
          <label>password</label>
          <StyledInput style={{ height: "2em", width: "17em" }} { ...password } />
        </div>
        <Button id="loginButton" className="login" type="submit" variant="dark">
          login
        </Button>
      </form>
    </div>
  );
};

export default Login;

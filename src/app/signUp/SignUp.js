import React from "react";
import { useDispatch } from "react-redux";
import { useField } from "../../hooks";
import { createUser } from "../../reducers";
import { StyledInput } from "../../components/styledComponents";
import { Button } from "react-bootstrap";
import "../login/login.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const [username, resetUsername] = useField("text", "signUpUsername");
  const [name, resetName] = useField("text", "signUpName");
  const [password, resetPassword] = useField("password", "signUpPassword");

  const handleSignUp = async event => {
    event.preventDefault();
    const newUser = {
      username: username.value,
      name: name.value,
      password: password.value
    };
    dispatch(createUser(newUser));
    resetUsername();
    resetName();
    resetPassword();
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <div className='field'>
          <label>username</label>
          <StyledInput style={{ height: "2em", width: "17em" }} { ...username } />
        </div>
        <div className='field'>
          <label>name</label>
          <StyledInput style={{ height: "2em", width: "17em" }} { ...name } />
        </div>
        <div className='field'>
          <label>password</label>
          <StyledInput style={{ height: "2em", width: "17em" }} { ...password } />
        </div>
        <Button className="login" type="submit" variant="dark">
        Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
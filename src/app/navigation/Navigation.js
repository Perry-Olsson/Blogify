import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Notification from "../notifacations/Notification";
import Togglable from "../togglable/Togglable";
import SignUp from "../signUp/SignUp";
import Login from "../login/Login";

const Navigation = ({ user, toggler }) => {
  const [formVisible, setFormVisible] = useState("neither");

  const username = user ? user.username : user;

  useEffect(() => () => setFormVisible("neither"), [username]);

  return user ? (
    <>
      <NavBar user={user} toggler={toggler} />
      <Notification />
    </>
  )
    :(
      <>
        <Notification />
        <div style={{ display: "flex", marginTop: "1em" }}>
          { formVisible !== "Log in" &&
            <Togglable setFormVisible={setFormVisible} style={{ marginRight: "2em" }} buttonLabel='Sign up' visible={false}>
              <SignUp />
            </Togglable>
          }
          { formVisible !== "Sign up" &&
            <Togglable setFormVisible={setFormVisible} buttonLabel='Log in' visible={false}>
              <Login />
            </Togglable>
          }
        </div>
      </>
    );
};

export default Navigation;
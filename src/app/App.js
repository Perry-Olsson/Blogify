// Deps
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
// misc
import { initializeBlogs, setUser } from "../reducers";
import { useDarkMode, useGetAndSetLikes } from "../hooks";
import { getLocalTheme } from "../utils/misc";
// Components
import Navigation from "./navigation/Navigation";
import BlogPage from "./blogPage/BlogPage";
import UserPage from "./users/UserPage";
// Style
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/gobalStyles";
import { lightMode, darkMode } from "../components/themes";
import "./App.css";
// import TestComponent  from '../TestComponent';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const getAndSetLikes = useGetAndSetLikes();
  const [theme, toggler] = useDarkMode(getLocalTheme());

  useEffect(() => {
    dispatch(initializeBlogs());
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      const loggedUser = window.localStorage.getItem("loggedUser");
      if (loggedUser) {
        let localUser = JSON.parse(loggedUser);
        dispatch(setUser(localUser));
        getAndSetLikes(localUser);
      }
    }
  }, [dispatch, getAndSetLikes, user]);

  return (
    <ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
      <GlobalStyles />
      <div className="container">
        <h1 className="logo">Blogbook</h1>
        <Navigation toggler={toggler} user={user} />
        <Switch>
          <Route path="/users">
            <UserPage />
          </Route>
          <Route path="/">
            <BlogPage user={user} />
          </Route>
        </Switch>
      </div>
      {/* <TestComponent /> */}
    </ThemeProvider>
  );
};

export default App;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { initializeBlogs, setUser } from "../reducers";
import { useDarkMode, useGetAndSetLikes } from "../hooks";
import Navigation from "./navigation/Navigation";
import BlogPage from "./blogPage/BlogPage";
import UserPage from "./users/UserPage";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/gobalStyles";
import { lightMode, darkMode } from "../components/themes";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const getAndSetLikes = useGetAndSetLikes();
  const [theme, toggler] = useDarkMode((user && user.theme) || "light");

  useEffect(() => {
    dispatch(initializeBlogs());
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      const loggedUser = window.localStorage.getItem("loggedUser");
      if (loggedUser) {
        let localUser = JSON.parse(loggedUser);
        toggler(localUser.id, localUser.theme);
        dispatch(setUser(localUser));
        getAndSetLikes(localUser);
      }
    }
  }, [dispatch, getAndSetLikes, user, toggler]);

  return (
    <ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
      <GlobalStyles />
      <Container>
        <StyledLogo to="/"><h1 className="logo">Blogify</h1></StyledLogo>
        <Navigation toggler={toggler} user={user} />
        <Switch>
          <Route path="/users">
            <UserPage />
          </Route>
          <Route path="/">
            <BlogPage user={user} />
          </Route>
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

const StyledLogo = styled(Link)`
  color: ${({ theme }) => theme.text};
  width: fit-content;
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

const Container = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  flex-direction: column;
  @media(min-width: 990px) {
    padding: 0 10%;
  }
`;

export default App;

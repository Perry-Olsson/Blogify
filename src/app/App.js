import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeBlogs, setUser, createNotification } from '../reducers';
import { Switch, Route } from 'react-router-dom';
import userService from '../services/users';
import Navigation from './navigation/Navigation';
import BlogPage from './blogPage/BlogPage';
import UserPage from './users/UserPage';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/gobalStyles';
import { lightMode, darkMode } from '../components/themes';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    dispatch(initializeBlogs());
    const loggedUser = window.localStorage.getItem('loggedUser');
    if (loggedUser) {
      let user = JSON.parse(loggedUser);
      userService
        .getLikes(user)
        .then(u => {
          dispatch(setUser(u));
        })
        .catch(e => {
          dispatch(
            createNotification({ type: 'danger', message: e.message }, 5)
          );
        });
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <GlobalStyles />
      <div className="container">
        <button onClick={themeToggler}>toggle</button>
        <h1 className="logo">Blogbook</h1>
        <Navigation user={user} />
        <Switch>
          <Route path="/users">
            <UserPage />
          </Route>
          <Route path="/">
            <BlogPage user={user} />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;

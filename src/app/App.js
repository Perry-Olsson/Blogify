// Deps
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
// misc
import { initializeBlogs, setUser } from '../reducers';
import { useDarkMode, useGetAndSetLikes } from '../hooks'
import { getLocalTheme } from '../utils/misc'
// Components
import Navigation from './navigation/Navigation';
import BlogPage from './blogPage/BlogPage';
import UserPage from './users/UserPage';
// Style
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/gobalStyles';
import { lightMode, darkMode } from '../components/themes';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const getAndSetLikes = useGetAndSetLikes();
  const [theme, toggler] = useDarkMode(getLocalTheme())

  useEffect(() => {
    dispatch(initializeBlogs());
    const loggedUser = window.localStorage.getItem('loggedUser');
    if (loggedUser && !user) {
      let user = JSON.parse(loggedUser);
      dispatch(setUser(user))
      getAndSetLikes(user)
    }
  }, [dispatch, getAndSetLikes, user]);
  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <GlobalStyles />
      <div className="container">
        <button onClick={toggler}>toggle</button>
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

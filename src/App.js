import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeBlogs, setUser, createNotification } from './reducers';
import { Switch, Route } from 'react-router-dom';
import userService from './services/users';
import Navigation from './app/navigation/Navigation';
import BlogPage from './app/blogPage/BlogPage';
import UserPage from './app/users/UserPage';
import { Container } from 'react-bootstrap';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

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
    <div className="darkMode">
      <Container>
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
      </Container>
    </div>
  );
};

export default App;

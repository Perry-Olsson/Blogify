import blogService from '../services/blogs';
import loginService from '../services/login';
import userService from '../services/users';
import { createNotification } from './notificationReducer';
import { likeBlog } from './blogReducer';

const userReducer = (state = null, action) => {
  switch (action.type) {
  case 'LOGIN':
    return action.user;
  case 'SET':
    return action.user;
  case 'SET_LIKES':
    return { ...state, likes: action.likes };
  case 'LIKE':
    return action.user;
  case 'LOGOUT':
    return null;
  default:
    return state;
  }
};

export const setUser = user => {
  return dispatch => {
    try {
      blogService.setToken(user.token);
      dispatch({
        type: 'SET',
        user,
      });
    } catch (e) {
      dispatch(createNotification({ type: 'danger', message: e.message }, 5));
    }
  };
};

export const setLikes = likes => {
  return dispatch => {
    dispatch({
      type: 'SET_LIKES',
      likes
    });
  };
};

export const loginUser = (username, password) => {
  return async dispatch => {
    try {
      const user = await loginService.login({ username, password });
      blogService.setToken(user.token);
      dispatch({
        type: 'LOGIN',
        user,
      });
      window.localStorage.setItem('loggedUser', JSON.stringify({ username: user.username, id: user.id, token: user.token }));
      dispatch(
        createNotification({ type: 'success', message: 'login successful' }, 5)
      );
    } catch (exception) {
      dispatch(
        createNotification(
          { type: 'danger', message: (exception.response.data && exception.response.data.error) || exception.message },
          5
        )
      );
    }
  };
};

export const saveLike = (userId, blog) => {
  return async dispatch => {
    try {
      const user = await userService.like(userId, blog.id);
      dispatch({ type: 'LIKE', user });
      dispatch(likeBlog(blog));
    } catch (e) {
      dispatch(
        createNotification(
          { type: 'danger', message: e.response.data.error },
          5
        )
      );
    }
  };
};

export const logoutUser = () => {
  window.localStorage.removeItem('loggedUser');
  return {
    type: 'LOGOUT',
  };
};

export default userReducer;

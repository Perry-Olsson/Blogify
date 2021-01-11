import blogService from "../services/blogs";
import loginService from "../services/login";
import userService from "../services/users";
import { createNotification } from "./notificationReducer";
import { likeBlog } from "./blogReducer";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "SET":
      return action.user;
    case "SET_LIKES":
      return { ...state, likes: action.likes };
    case "LIKE":
      return action.user;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
};

export const createUser = newUser => {
  return async dispatch => {
    try {
      const user = await userService.create(newUser);
      dispatch(loginUser(user.username, newUser.password, "Account created!"));
    } catch (exception) {
      dispatch(
        createNotification(
          {
            type: "danger",
            message:
              (exception.response.data && exception.response.data.error) ||
              exception.message,
          },
          5
        )
      );
    }
  };
};

export const setUser = user => {
  return dispatch => {
    try {
      blogService.setToken(user.token);
      dispatch({
        type: "SET",
        user,
      });
    } catch (e) {
      dispatch(createNotification({ type: "danger", message: e.message }, 5));
    }
  };
};

export const setLikes = likes => {
  return dispatch => {
    dispatch({
      type: "SET_LIKES",
      likes,
    });
  };
};

export const loginUser = (username, password, message = "login successful") => {
  return async dispatch => {
    try {
      const user = await loginService.login({ username, password });
      blogService.setToken(user.token);
      dispatch({
        type: "LOGIN",
        user,
      });
      window.localStorage.setItem(
        "loggedUser",
        JSON.stringify({
          username: user.username,
          id: user.id,
          token: user.token,
        })
      );
      dispatch(createNotification({ type: "success", message }, 5));
    } catch (exception) {
      dispatch(
        createNotification(
          {
            type: "danger",
            message:
              (exception.response.data && exception.response.data.error) ||
              exception.message,
          },
          5
        )
      );
    }
  };
};

export const saveLike = (user, blog) => {
  return async dispatch => {
    try {
      dispatch({ type: "LIKE", user });
      dispatch(likeBlog(blog));
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        userService.like(user.id, blog.id);
      }, 500);
    } catch (e) {
      dispatch(
        createNotification(
          { type: "danger", message: e.response.data.error },
          5
        )
      );
    }
  };
};

let timeoutId;

export const saveRemoveLike = (user, blog) => {
  return async dispatch => {
    try {
      dispatch({ type: "LIKE", user });
      dispatch(likeBlog(blog));
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        userService.removeLike(user.id, blog.id);
      }, 500);
    } catch (e) {
      dispatch(
        createNotification(
          { type: "danger", message: e.response.data.error },
          5
        )
      );
    }
  };
};

export const logoutUser = () => {
  window.localStorage.removeItem("loggedUser");
  return {
    type: "LOGOUT",
  };
};

export default userReducer;

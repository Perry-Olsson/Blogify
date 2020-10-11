import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import userService  from '../services/users'
import { saveLike, setLikes, logoutUser, createNotification } from '../reducers';

export const useLikeBlog = (blog, user) => {
  const dispatch = useDispatch();

  if (!blog || !user) return null;

  const like = () => {
    blog.likes++;
    dispatch(saveLike(user, blog));
  };
  return like;
};

export const useField = (type, id) => {
  const [value, setValue] = useState('');

  const onChange = event => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return [
    {
      id,
      type,
      value,
      onChange,
      name: id,
    },
    reset,
  ];
};

export const useGetAndSetLikes = () => {
  const dispatch = useDispatch()

  const handleError = (error) => {
    if (error.response.data.error === 'User not found') dispatch(logoutUser())
    else dispatch(
      createNotification({ type: 'danger', message: error.response.data.error }, 5)
    );
  }

  const main = async (user) => {
    try {
      const response = await userService.getLikes(user)
      dispatch(setLikes(response.likes))
    } catch(e) {
      handleError(e)
    }
  }

  return main
}

export const useDarkMode = (userTheme) => {
  const [theme, setTheme] = useState(userTheme || 'light')

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode) 
    setTheme(mode)
  }

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  return [theme, themeToggler]
}
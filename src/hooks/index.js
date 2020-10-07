import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveLike } from '../reducers/userReducer';

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

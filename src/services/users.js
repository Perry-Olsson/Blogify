import axios from 'axios';
import { token } from './blogs';
const baseUrl = '/api/users';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const like = async (userId, blogId) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(`${baseUrl}/like/${userId}/${blogId}`, null, config);
  return response.data;
};

const getLikes = async user => {
  const response = await axios.get(`${baseUrl}/likes/${user.id}`);
  user.likes = response.data.likes;
  return user;
};

const setTheme = async (theme, userId) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(`${baseUrl}/theme/${userId}`, theme, config);
  return response.data;
};

const getTheme = async (id) => {
  const response = await axios.get(`${baseUrl}/theme/${id}`);
  return response.data;
};

export default { getAll, like, getLikes, setTheme, getTheme };

import axios from "axios";
import loginHelper from "../utils/loginHelper";
const baseUrl = "/api/blogs";

export let token = null;

const setToken = newToken => {
  if (!newToken) {
    token = loginHelper.getUserToken();
    if (!token) throw new Error("Must log in");
  } else token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const addBlog = async blog => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, blog, config);
  return response.data;
};

const deleteBlog = async id => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response;
};

const updateBlog = async blog => {
  const response = await axios.put(`${baseUrl}/${blog.id}`, blog);
  return response;
};

const addComment = async comment => {
  const response = await axios.put(`${baseUrl}/${comment.blog.id}/comments`, {
    comment: comment.value,
    user: comment.user.username,
  });
  return response;
};

const deleteComment = async (blogId, commentId) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(
    `${baseUrl}/${blogId}/comments/${commentId}`,
    config
  );
  return response;
};

export default {
  getAll,
  addBlog,
  setToken,
  deleteBlog,
  updateBlog,
  addComment,
  deleteComment,
};

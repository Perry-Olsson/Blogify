import React from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../../../../reducers/blogReducer";
import { createNotification } from "../../../../reducers/notificationReducer";
import blogService from "../../../../services/blogs";
import { useField } from "../../../../hooks";
import { StyledInput, StyledButton } from "../../../../components/styledComponents";
import "./AddBlog.css";

const AddBlog = ({ toggleVisibility }) => {
  const dispatch = useDispatch();
  const [title, resetTitle] = useField("text", "title");
  const [author, resetAuthor] = useField("text", "author");
  const [url, resetUrl] = useField("text", "url");

  const createBlog = async event => {
    event.preventDefault();
    const newBlog = await queryDb();
    if (newBlog) {
      dispatchAndToggleForm(newBlog);
    }
  };

  const queryDb = async () => {
    try {
      const newBlog = { title: title.value, author: author.value, url: url.value };
      return await blogService.addBlog(newBlog);
    } catch (exception) {
      exception.response
        ? dispatch(
          createNotification(
            { type: "danger", message: exception.response.data.error },
            5
          )
        )
        : console.log(exception);
      return null;
    }
  };

  const dispatchAndToggleForm = newBlog => {
    clearForm();
    dispatch(addBlog(newBlog));
    dispatch(createNotification({ type: "success", message: "blog added" }, 5));
    toggleVisibility();
  };

  const clearForm = () => {
    resetTitle();
    resetAuthor();
    resetUrl();
  };

  return (
    <form
      id="addBlogForm"
      className="flex-column margin-bottom"
      onSubmit={createBlog}
    >
      <h2 style={{ fontFamily: "Anton, sans-serif" }}>New Blog</h2>
      <label>title: </label>
      <StyledInput {...title} />
      <label>author: </label>
      <StyledInput {...author} />
      <label>url: </label>
      <StyledInput {...url} />
      <StyledButton
        id="createBlog"
        type="submit"
        style={{ margin: "1rem 0" }}
      >
        create
      </StyledButton>
    </form>
  );
};

export default AddBlog;

import React from "react";
import { useField } from "../../../hooks";
import { StyledButton, StyledInput } from "../../../components/styledComponents";

const AddComment = ({ createComment, toggleVisibility }) => {
  const [comment, resetComment] = useField("text", "comment");

  const addCommentAndToggleForm = (event, comment) => {
    event.preventDefault();
    if (comment.value) {
      createComment(comment.value);
      resetComment();
      toggleVisibility();
    }
  };

  return (
    <form onSubmit={event => addCommentAndToggleForm(event, comment)}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <StyledInput
          { ...comment }
        />
        <StyledButton
          size='sm'
          style={{ margin: ".5em 0" }}
          type="submit"
        >
          add comment
        </StyledButton>
      </div>
    </form>
  );
};

export default AddComment;

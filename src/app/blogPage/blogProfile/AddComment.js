import React, { useState } from 'react';
import { StyledButton } from '../../../components/styledComponents'

const AddComment = ({ createComment, toggleVisibility }) => {
  const [comment, setComment] = useState('');

  const addCommentAndToggleForm = (event, comment) => {
    event.preventDefault();
    createComment(comment);
    toggleVisibility();
  };

  return (
    <form onSubmit={event => addCommentAndToggleForm(event, comment)}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        <StyledButton
          size='sm'
          style={{ margin: '.5em 0' }}
          type="submit"
        >
          add comment
        </StyledButton>
      </div>
    </form>
  );
};

export default AddComment;

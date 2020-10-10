import React from 'react';
import { useSelector } from 'react-redux';
import Togglable from '../../togglable/Togglable';
import AddComment from './AddComment';
import './blogProfile.css'
import { StyledButtonMinimal } from '../../../components/styledComponents';

const CommentSection = ({ blog, del, createComment }) => {
  const user = useSelector(state => state.user);
  return (
    <>
      <div className="section">
        <h4>Comments:</h4>
        <ul>
          {blog.comments.map((comment, i) => (
            <li key={i}>
              {comment.comment}
              {user && user.username === comment.user && (
                <StyledButtonMinimal
                  variant="outline-danger"
                  onClick={() => del(comment.id)}
                  style={{ width: 'fit-content', marginLeft: '2em' }}
                >
                  delete
                </StyledButtonMinimal>
              )}
            </li>
          ))}
        </ul>
      </div>
      {user && (
        <Togglable buttonLabel="Comment" visible={false} size="sm">
          <AddComment createComment={createComment} />
        </Togglable>
      )}
    </>
  );
};
export default CommentSection;

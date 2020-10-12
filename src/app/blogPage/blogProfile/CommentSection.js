import React from 'react';
import { useSelector } from 'react-redux';
import Togglable from '../../togglable/Togglable';
import AddComment from './AddComment';
import './blogProfile.css';
import OptionsIcon from '../../../components/optionsIcon/OptionsIcon';

const CommentSection = ({ blog, del, createComment }) => {
  const user = useSelector(state => state.user);
  return (
    <>
      <div className="section">
        <h4>Comments:</h4>
        <ul>
          {blog.comments.map((comment, i) => (
            <div className='optionsButtonContainer' style={{ display: 'flex', alignItems: 'center', width: '8em', height: '2em' }} key={i}><li>
              {comment.comment}
            </li>
            {user && user.username === comment.user && (
              <OptionsIcon id='comment' size='sm'  style={{ marginLeft:'2em' }} className='optionsButton' />
            )}
            </div>
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

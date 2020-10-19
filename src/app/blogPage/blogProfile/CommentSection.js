import React from 'react';
import { useSelector } from 'react-redux';
import Togglable from '../../togglable/Togglable';
import AddComment from './AddComment';
import CustomToggle from '../../../components/CustomToggle';
import { Dropdown } from 'react-bootstrap';
import './blogProfile.css';

const optionsButtonContainerStyle = {
  lineHeight: '2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '33em',
  margin: '1em 0',
  padding: '0.5em 0'
};

const CommentSection = ({ blog, del, createComment }) => {
  const user = useSelector(state => state.user);
  return (
    <>
      <div className="section">
        <h4>Comments:</h4>
        <ul>
          {blog.comments.map((comment, i) => (
            <div className='optionsButtonContainer' style={optionsButtonContainerStyle} key={i}>
              <li style={{ width: '29em' }}>
                {comment.comment}
              </li>
              {user && user.username === comment.user && (
                <Dropdown style={{ alignSelf: 'center' }}>
                  <Dropdown.Toggle as={CustomToggle}
                    id='nav'
                    size='sm'
                    style={{ marginLeft: '0.8em' }}
                    className='optionsButton danger'
                  >
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='optionsButton'>
                    <Dropdown.Item
                      className='optionsButtonContainer'
                      as='button'
                      onClick={() => del(comment.id)}
                      style={{ color: 'red' }}
                    >
                    Delete Comment
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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

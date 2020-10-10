import React from 'react';
import { useSelector } from 'react-redux';
import LikeButton from './LikeButton';
import { StyledButton, StyledButtonOutline } from '../../../components/styledComponents'
import './blogProfile.css';
import OptionsIcon from '../../../components/OptionsIcon';

const Profile = ({ blog, confirmDeletion }) => {
  const user = useSelector(state => state.user);
  return (
    <>
      <h2>{blog.title}</h2>
      <iframe title={blog.title} src={blog.url} className="embeddedBlog" />
      <div className='optionsButtonContainer' style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div className="likeButtonDiv">
          <a href={blog.url} rel="noopener noreferrer" target="_blank">
            <StyledButton variant="outline-dark">visit page</StyledButton>
          </a>
          <div>
            {user ? (
              <LikeButton blog={blog} user={user} />
            ) : (
              <span style={{ margin: '0 1em' }}></span>
            )}
            {blog.likes} likes
          </div>
        </div>
      <OptionsIcon variant='light' size='sm' className='optionsButton' />
      </div>
      <p>
        added by <b>{blog.user.username}</b>
      </p>
      {user && user.username === blog.user.username && (
        <StyledButtonOutline onClick={confirmDeletion}>
          Delete
        </StyledButtonOutline>
      )}
    </>
  );
};

export default Profile;
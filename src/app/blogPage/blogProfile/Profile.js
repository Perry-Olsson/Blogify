import React from 'react';
import { useSelector } from 'react-redux';
import LikeButton from './LikeButton';
import CustomToggle from '../../../components/CustomToggle';
import { Dropdown } from 'react-bootstrap';
import { StyledButton } from '../../../components/styledComponents';
import './blogProfile.css';

// const MenuWrapper = ({children}) => {
//   const [show, setShow] = useState(false)
//   const display = { display: show ? 'flex' : 'none' }
//   return <div>{children}</div>
// }

const Profile = ({ blog, confirmDeletion }) => {
  const user = useSelector(state => state.user);
  return (
    <>
      <h2>{blog.title}</h2>
      <iframe title={blog.title} src={blog.url} className="embeddedBlog" />
      <div className='optionsButtonContainer' style={{ display: 'flex', justifyContent: 'space-between' }}>
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
        {user && user.username === blog.user.username &&
        <Dropdown style={{ alignSelf: 'center' }}>
          <Dropdown.Toggle as={CustomToggle}
            id='nav'
            size='sm'
            style={{ marginLeft: '0.8em' }}
            className='optionsButton danger'
          >
          </Dropdown.Toggle>
          <Dropdown.Menu className='optionsButton'>
            <Dropdown.Item as='button' onClick={() => confirmDeletion() } style={{ color: 'red' }}>Delete Blog</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        }
      </div>
      <p>
        added by <b>{blog.user.username}</b>
      </p>
    </>
  );
};

export default Profile;

import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../reducers/userReducer';
import { clearNotification } from '../../reducers/notificationReducer';
import {StyledLink} from '../../components/styledComponents';
import { Button, Navbar, Nav } from 'react-bootstrap';

const NavBar = ({ user }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearNotification());
    dispatch(logoutUser());
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ margin: '1em 0', borderRadius: '2px' }}
      className="navBar"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" as="div">
            <StyledLink to="/">Blogs</StyledLink>
          </Nav.Link>
          <Nav.Link href="#" as="div">
            <StyledLink to="/users">Users</StyledLink>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#" style={{ marginRight: '1em' }}>
            <div className="navBar">logged in as {user.username}</div>
          </Nav.Link>
          <Button
            className="logout"
            onClick={handleLogout}
            variant="outline-light"
          >
            logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../reducers/userReducer";
import { clearNotification } from "../../reducers/notificationReducer";
import { StyledLink } from "../../components/styledComponents";
import CustomToggle from "../../components/CustomToggle";
import { Button, Navbar, Nav, Dropdown } from "react-bootstrap";
import "./nav.css";

const NavBar = ({ user, toggler }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearNotification());
    toggler();
    dispatch(logoutUser());
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ margin: "1em 0", borderRadius: "2px" }}
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
          <Nav.Link href="#" style={{ marginRight: "1em" }}>
            <div className="navBar">logged in as {user.username}</div>
          </Nav.Link>
          <Button
            className="logout"
            onClick={handleLogout}
            variant="outline-light"
          >
            logout
          </Button>
          <Dropdown style={{ alignSelf: "center" }}>
            <Dropdown.Toggle
              as={CustomToggle}
              id="nav"
              size="sm"
              variant="dark"
              style={{ marginLeft: "0.8em" }}
            ></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as="button" onClick={() => toggler(user.id)}>
                Change theme
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

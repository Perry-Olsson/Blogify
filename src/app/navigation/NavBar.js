import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../reducers/userReducer";
import { clearNotification } from "../../reducers/notificationReducer";
import { StyledLink } from "../../components/styledComponents";
import CustomToggle from "../../components/CustomToggle";
import { Button, Navbar, Nav, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import "./nav.css";

const NavBar = ({ user, toggler }) => {
  const router = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearNotification());
    toggler();
    dispatch(logoutUser());
    router.push("/");
  };

  return (
    <>
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
          <Nav style={{ display: "flex", flexDirection: "row" }}>
            <Nav.Link href="#" style={{}}>
              <DeadLink>logged in as {user.username}</DeadLink>
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

              <Dropdown.Menu
                style={{ position: "absolute", left: "-100px", top: "40px" }}
              >
                <Dropdown.Item as="button" onClick={() => toggler(user.id)}>
                  Change theme
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const DeadLink = styled.div`
  color: ${({ theme }) => theme.navBar.text};
  margin-right: 0.4em;
  border: solid 1px ${({ theme }) => theme.background};
  border-radius: 3px;
  cursor: auto;
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.navBar.text};
  }
`;

export default NavBar;

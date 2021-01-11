import React from "react";
import User from "./User";
import { StyledListGroupItem } from "../../components/styledComponents";
import { ListGroup } from "react-bootstrap";

const UserList = ({ users }) => (
  <div>
    <h2 style={{ margin: "1em 0" }}>Users</h2>
    <div style={{ marginLeft: "1.2em", display: "flex", justifyContent: "space-between", width: "21em" }}>
      <h4>User</h4>
      <h4>Blogs Created</h4>
    </div>
    <ListGroup>
      {users.map(user =>
        <StyledListGroupItem style={{ backgroundColor: "inherit", borderColor: "inherit" }} key={user.id}>
          <User  user={user} />
        </StyledListGroupItem>)
      }
    </ListGroup>
  </div>
);

export default UserList;
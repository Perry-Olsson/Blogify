import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import styled from "styled-components";

const Blog = ({ blog }) => (
  <StyledCard
    className={`${blog.title.replace(/ /gm, "-")}`}
  >
    <Card.Body
      style={{
        display: "flex",
        minHeight: "7em",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Card.Title
        id="blogInfo"
        style={{ fontSize: "1.5rem", paddingRight: "2em", margin: 0 }}
      >
        {blog.title} | {blog.author}
      </Card.Title>
      <Link to={`/blogs/${blog.id}`}>
        <Button variant="info" className="view">
          view
        </Button>
      </Link>
    </Card.Body>
  </StyledCard>
);

const StyledCard = styled(Card)`
  max-width: 990px;
  margin: 2em 0;
  border-color: #aaaaaa;
  background: inherit;
`;

export default Blog;

import React from "react";
import { useLikeBlog } from "../../../hooks";
import { Button } from "react-bootstrap";

const LikeButton = ({ blog, user }) => {
  const [like, removeLike] = useLikeBlog(blog, user.id);
  if (!user.likes) {
    return null;
  }
  return user.likes[blog.id] ? (
    <Button variant="info" style={{ margin: "0 1em", width: "3.7em" }} onClick={removeLike}>
      liked
    </Button>
  ) : (
    <Button
      variant="outline-info"
      style={{ margin: "0 1em", width: "3.7em" }}
      onClick={like}
    >
      like
    </Button>
  );
};

export default LikeButton;

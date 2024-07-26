import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <p>{post.content}</p>
    </div>
  );
};

export default Post;

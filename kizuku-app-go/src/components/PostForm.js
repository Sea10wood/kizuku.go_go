// src/components/PostForm.js
import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;

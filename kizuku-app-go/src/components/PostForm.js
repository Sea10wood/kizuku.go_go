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
        placeholder="Kizuku.go!"
      />
      <button type="submit">post</button>
    </form>
  );
};

export default PostForm;

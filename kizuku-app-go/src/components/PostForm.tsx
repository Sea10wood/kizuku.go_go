import React, { useState } from 'react';

interface PostFormProps {
  addPost: (content: string) => void;
}

const PostForm: React.FC<PostFormProps> = ({ addPost }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      addPost(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Kizuku.go!"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;

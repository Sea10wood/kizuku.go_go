import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, content: 'もっく' },
    { id: 2, content: 'mokumoku' }
  ]);

 

  const addPost = (content) => {
    const newPost = { id: posts.length + 1, content };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="app">
      <header className="page-header">
        <h3>🎲 　Kizuku.go 　🎲</h3>
      </header>
      <div className="content">
        <PostList posts={posts} />
      </div>
      <div className="fixed-bottom-form">
        <PostForm addPost={addPost} />
      </div>
    </div>
  );
};

export default App;

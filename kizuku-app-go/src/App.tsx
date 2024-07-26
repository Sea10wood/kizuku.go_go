import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import apiClient from './api/axios';
import './App.css';

const App: React.FC = () => {
  const [posts, setPosts] = useState<{ id: number; content: string }[]>([]);

  useEffect(() => {
    apiClient.get('/questions')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const addPost = (content: string) => {
    const newPost = { content };
    apiClient.post('/questions', newPost)
      .then(response => {
        setPosts([response.data, ...posts]);
      })
      .catch(error => {
        console.error('Error adding post:', error);
      });
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

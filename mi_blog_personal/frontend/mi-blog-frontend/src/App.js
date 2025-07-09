// src/App.js
import React from 'react';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Mi Blog Personal</h1>
      <PostList />
    </div>
  );
}

export default App;
// src/components/PostList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/blog/api/posts/")
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error al cargar los posts:', error));
  }, []);

  return (
    <div>
      <h2>Publicaciones del Blog</h2>
      {posts.length === 0 ? (
        <p>No hay publicaciones disponibles.</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id} style={{ marginBottom: '20px' }}>
              <h3>{post.titulo}</h3>
              <p>{post.contenido}</p>
              <small>Publicado el: {new Date(post.fecha).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;

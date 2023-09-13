import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const commentsResponse = await fetch('https://jsonplaceholder.typicode.com/comments');
      const commentsData = await commentsResponse.json();
      setComments(commentsData);

      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const usersData = await usersResponse.json();
      setUsers(usersData);
    } catch (error) {
      console.log('error');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="comments-list">
      <h1>Comments and users</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            User:{users.find((user) => user.id === comment.postId)?.name || 'Unknown user'}
            <strong>{comment.name}</strong>email: {comment.email}
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

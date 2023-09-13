import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header
import React from 'react';
import './navigation.scss';

export const Navigation = ({ isLogin }) => (
  <nav>
    <ul>
      <li><a href="home.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      {isLogin && <li><a href="user.html">User</a></li>}
    </ul>
  </nav>
);

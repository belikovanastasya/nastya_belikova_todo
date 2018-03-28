import React from 'react';
import './navigation.scss';

const navList = ['Home', 'Products', 'Contacts'];

export const List = () => (
  <ul>
    {navList
      .map((nav, index) => <li key={index}><a href={`/${nav.toLowerCase()}`}>{nav}</a></li>)}
  </ul>
);

export const Navigation = () => (
  <nav>
    <List />
  </nav>
);

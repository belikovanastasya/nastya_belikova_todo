import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

const navList = ['Home', 'Contacts', 'TaskList'];

export const Navigation = ({ user }) => (
  <nav>
    <ul>
      <li>{user && < NavLink to={`/user`}
          exact >{user.firstName}</NavLink>}</li>
      {navList
        .map((nav, index) => <li key={index}><NavLink
          to={`/${nav.toLowerCase()}`}
          exact
          activeClassName="active"
        >
          {nav}</NavLink>
        </li>)}
    </ul>
  </nav>
);

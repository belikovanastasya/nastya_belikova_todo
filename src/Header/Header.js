import React from 'react';
import './header.scss';
import { Navigation } from '../Navigation';

export const Header = () => (
  <header>
    <div className="wrapper">
      <a href="index.html" className="logo">Logo</a>
      <Navigation isLogin />
    </div>
  </header>
);

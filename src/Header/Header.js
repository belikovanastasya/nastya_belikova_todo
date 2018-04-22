import React from 'react';
import './header.scss';
import { Navigation } from '../Navigation';

export const Header = ({ login, setLoginState, user }) => {
  const isLoginPage = location.href.includes('login');
  return (
    <header className="header">
    <div className="wrapper">  
        <a href="/" className="logo">Logo</a>
        {!isLoginPage && <button onClick={() => setLoginState()}>Logout</button>}  
        
      <Navigation user={user} />   
    </div>  
  </header>
  ); };
 
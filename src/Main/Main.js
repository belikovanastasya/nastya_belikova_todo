import React from 'react';
import './main.scss';
import { Aside } from '../Aside';
import { Content } from '../Content';


export const Main = () => (
  <main>
    <div className="wrapper">
      <Aside />
      <Content />
    </div>
  </main>
);

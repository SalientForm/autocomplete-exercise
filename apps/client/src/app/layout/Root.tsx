import { Divider } from '@mui/material';
import React from 'react';
import { Content } from './Content';
import { Header } from './Header';

export function Root() {
  return (
    <div className="root-container">
      <Header />
      <Divider />
      <Content />
    </div>
  );
}

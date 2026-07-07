import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route } from './routes/index';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Route.component />
  </React.StrictMode>
);

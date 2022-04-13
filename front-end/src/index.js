import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('esg')).render(
  <StrictMode>
    <App />
  </StrictMode>)
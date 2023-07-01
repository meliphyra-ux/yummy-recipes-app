import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import LoaderProvider from './contexts/LoaderContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoaderProvider>
      <App />
    </LoaderProvider>
  </React.StrictMode>
);

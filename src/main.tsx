import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { fetchAPIData } from './utils/api';
import LoaderProvider from './contexts/LoaderContext';

export const fetchDataFromAPI = fetchAPIData();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoaderProvider>
      <App />
    </LoaderProvider>
  </React.StrictMode>
);

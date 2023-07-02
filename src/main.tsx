import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import LoaderProvider from './contexts/LoaderContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <LoaderProvider>
      <App />
    </LoaderProvider>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { fetchAPIData } from './utils/api'

export const fetchDataFromAPI = fetchAPIData()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

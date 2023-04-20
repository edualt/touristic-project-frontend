import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './pages/Login'
import DetailTuristSite from './pages/DetailTuristSite'
import Register from './pages/Register'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DetailTuristSite />
  </React.StrictMode>,
)

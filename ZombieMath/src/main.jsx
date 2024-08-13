import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './pages/App.jsx'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

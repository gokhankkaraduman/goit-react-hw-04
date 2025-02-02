import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Styles

import './css/index.css'
import 'modern-normalize/modern-normalize.css';

import App from './components/App/App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Sregister/index.jsx'
import Login from './pages/Slogin/index.jsx'
import Adminlog from './pages/Adminlog/index.jsx'
import Adminregi from './pages/Adminregi/index.jsx'
import Studentdash from './pages/studentsdash/index.jsx'
import Admindash from './pages/admindash/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

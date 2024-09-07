import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register/index.jsx'
import Login from './pages/Login/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element=<App></App> />
        <Route path='/register' element=<Register></Register> />
        <Route path='/login' element=<Login></Login> />




      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

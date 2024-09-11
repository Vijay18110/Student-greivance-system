
import './App.css'
import Register from './pages/Sregister/index.jsx'
import Login from './pages/Slogin/index.jsx'
import Adminlog from './pages/Adminlog/index.jsx'
import Adminregi from './pages/Adminregi/index.jsx'
import Studentdash from './pages/studentsdash/index.jsx'
import Admindash from './pages/admindash/index.jsx'
import Home from './pages/Home.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element=<Home></Home> />
        <Route path='/student/register' element=<Register></Register> />
        <Route path='/admin/register' element=<Adminregi></Adminregi> />
        <Route path='/student/login' element=<Login></Login> />
        <Route path='/admin/login' element=<Adminlog></Adminlog> />
        <Route path='/student/dash' element=<Studentdash></Studentdash> />
        <Route path='/admin/dash' element=<Admindash></Admindash> ></Route>
      </Routes>

    </>
  )
}
export default App

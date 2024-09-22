
import './App.css'
import Register from './pages/Sregister/index.jsx'
import Login from './pages/Slogin/index.jsx'
import Adminlog from './pages/Adminlog/index.jsx'
import Adminregi from './pages/Adminregi/index.jsx'
import Studentdash from './pages/studentsdash/index.jsx'
import Admindash from './pages/admindash/index.jsx'
import Home from './pages/Home.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import Resolver from './pages/Resolver/index.jsx'
import Resoverlogin from './pages/resolverlogin/index.jsx'
import Resoverregister from './pages/resolverregister/index.jsx'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element=<Home></Home> />
        <Route path='/student/register' element=<Register></Register> />
        <Route path='/resolver' element=<Resolver></Resolver> />
        <Route path='/admin/register' element=<Adminregi></Adminregi> />
        <Route path='/student/login' element=<Login></Login> />
        <Route path='/admin/login' element=<Adminlog></Adminlog> />
        <Route path='/student/dash' element=<Studentdash></Studentdash> />
        <Route path='/admin/dash' element=<Admindash></Admindash> ></Route>
        <Route path='/resolver/login' element=<Resoverlogin></Resoverlogin> ></Route>
        <Route path='/resolver/register' element=<Resoverregister></Resoverregister> ></Route>
      </Routes>
    </>
  )
}
export default App

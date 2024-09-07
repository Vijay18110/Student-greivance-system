import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main';
function App() {
  const [listname, setListname] = useState("home");
  const getlistname = (name) => { setListname(name) }
  return (
    <>
      <nav>
        <Navbar listname={listname} getlistname={getlistname}></Navbar>
      </nav>
      <main>
        <Main content={listname}></Main>
      </main>
      <footer></footer>
    </>
  )
}
export default App

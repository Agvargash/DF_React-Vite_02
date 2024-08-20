import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar></Navbar>
  {/* <Login></Login> */}
  {/* <Home></Home> */}
  <Register></Register>
  <Footer></Footer>
  </>
  )
}

export default App

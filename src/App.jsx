import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App

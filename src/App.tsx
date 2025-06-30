import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from './Pages/Home/Home.jsx'
import Header from './Components/Header.jsx'

function App() {
  return (
    <>
      <Header />
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Home />} />
        <Route path='/sale' element={<Home />} />
        <Route path='/features' element={<Home />} />
        <Route path='/blog' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/contact' element={<Home />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

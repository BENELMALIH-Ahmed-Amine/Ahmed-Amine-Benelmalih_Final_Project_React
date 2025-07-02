import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from './Pages/Home/Home.jsx'
import Header from './Components/Header.jsx'
// import Blog from './Pages/Blog/Blog.jsx'
import BlogAr from './Pages/Blog/BlogAr.jsx'
import About from './Pages/About.jsx'
import Features from './Pages/Features.jsx'
import Contact from './Pages/Contact.jsx'
// import { MyProvider } from './Context/index.jsx'

function App() {
  return (
    <>
      <Header />
      <Nav />

      {/* <MyProvider> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Home />} />
          <Route path='/sale' element={<Home />} />
          <Route path='/features' element={<Features/>} />
          {/* <Route path='/blog' element={<Blog />} /> */}
          <Route path='/blog/:id' element={<BlogAr />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      {/* </MyProvider> */}

      <Footer />
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header.jsx'
import Nav from './Components/Nav'
import Home from './Pages/Home/Home.jsx'
import Shop from './Pages/Shop/Shop.jsx'
import Sale from './Pages/Sale.jsx'
import Features from './Pages/Features.jsx'
// import Blog from './Pages/Blog/Blog.jsx'
import BlogAr from './Pages/Blog/BlogAr.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Footer from './Components/Footer'
// import { MyProvider } from './Context/index.jsx'

function App() {
  return (
    <>
      <Header />
      <Nav />

      {/* <MyProvider> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/sale' element={<Sale />} />
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

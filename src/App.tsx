import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from './Pages/Home/Home.jsx'
import Header from './Components/Header.jsx'
// import Blog from './Pages/Blog/Blog.jsx'
import BlogAr from './Pages/Blog/BlogAr.jsx'
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
          <Route path='/features' element={<Home />} />
          {/* <Route path='/blog' element={<Blog />} /> */}
          <Route path='/blog/:id' element={<BlogAr />} />
          <Route path='/about' element={<Home />} />
          <Route path='/contact' element={<Home />} />
        </Routes>
      {/* </MyProvider> */}

      <Footer />
    </>
  )
}

export default App

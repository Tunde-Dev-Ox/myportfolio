import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Stack from './pages/stack'
import Projects from './pages/projects'
import About from './pages/about'
import Blog from './pages/blog'
import Contact from './pages/contact'
import BlogPage from './pages/blogPage'
import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from './utils/ScrollToTop'
import Lingroks from './pages/projects/lingroks'
import Brooi from './pages/projects/brooi'


function App() {

  return (
    <>
      <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/stack' element={<Stack />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:slug' element={<BlogPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects/lingroks' element={<Lingroks />} />
          <Route path='/projects/brooi' element={<Brooi />} />
        </Routes>
      </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App

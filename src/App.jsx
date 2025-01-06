import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Skills from './pages/skills'
import Services from './pages/services'
import Projects from './pages/projects'
import About from './pages/about'
import Blog from './pages/blog'
import Certifications from './pages/certifications'
import SplashScreen from './components/splashscreen'
import BlogPage from './pages/blogPage'
import { useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from './utils/ScrollToTop'




function App() {
  const [showSplash, setShowSplash] = useState(true);

    const handleSplashFinish = () => {
        setShowSplash(false);
    };

  return (
    <>
      
      {showSplash ? (
                <SplashScreen onFinish={handleSplashFinish} />
            ) : (
          <HelmetProvider>
            <BrowserRouter>
            <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:slug' element={<BlogPage />} />
          <Route path='/certifications' element={<Certifications />} />
        </Routes>
      </BrowserRouter>
      </HelmetProvider>
      )}
    </>
  )
}

export default App

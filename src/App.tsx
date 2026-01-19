//import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { Home } from './Home'
import { About } from './About'
import { Footer } from './Footer'
import { CenterDetail } from './CenterDetail'
import { PageNotFound } from './PageNotFound'
import { CenterManager } from './CenterManager'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
 
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/home" element={<Home />}  />
          <Route path="/about" element={<About />}  />
          <Route path="*" element={<Home />} />
          // <Route path="/center" element={<CenterManager />}  />
          // <Route path="/center/:id" element={<CenterDetail />} />
          // <Route path="/error" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App

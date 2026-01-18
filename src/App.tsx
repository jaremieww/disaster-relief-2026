import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { Home } from './Home'
import { Footer } from './Footer'
import { CenterDetail } from './CenterDetail'
import { PageNotFound } from './PageNotFound'
import { CenterManager } from './CenterManager'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Router>
        <Routes>
          {/* <Route path="/" exact>
            <Redirect to="/home" />
          </Route> */}
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} exact />
          <Route path="*" element={<Home />} />
          // <Route path="/center" element={<CenterManager />} exact />
          // <Route path="/center/:id" element={<CenterDetail />} />
          // <Route path="/error" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App

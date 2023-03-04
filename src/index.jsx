import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Logement from './pages/Logement'
import Page404 from './components/Page404'
import Header from './components/Header'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Logement" element={<Logement />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
)

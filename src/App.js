import React from 'react'
import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Pratos from './pages/Pratos'
import Faq from './pages/Faq'
import FaleConosco from './pages/FaleConosco'

const App = () => {
 
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pratos" element={<Pratos title="Pratos"/>}></Route>
        <Route path="/faq" element={<Faq/>}></Route>
        <Route path="/fale-conosco" element={<FaleConosco/>}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
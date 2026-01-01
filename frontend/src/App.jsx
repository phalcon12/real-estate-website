import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Properties from './pages/Properties'
import PropertyDetail from './pages/PropertyDetail'
import Header from './components/Header'
import Footer from './components/Footer'
import initInViewObserver from './utils/scrollObserver'
import ChatWidget from './components/ChatWidget'

export default function App(){
  useEffect(()=>{
    initInViewObserver()
  },[])

  return (
    <div className="app-root">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetail />} />
        </Routes>
      </main>
      <Footer />
      {/* Chat widget is rendered globally */}
      <ChatWidget />
    </div>
  )
}

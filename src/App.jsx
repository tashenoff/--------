import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import CTA from './components/CTA'
import Map from './components/Map'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <Products />
      <About />
      <CTA />
      <Map />
      <Footer />
    </div>
  )
}

export default App


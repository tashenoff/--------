import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Map from './components/Map'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <Hero />
      <Products />
      <About />
      <Map />
      <Footer />
    </div>
  )
}

export default App

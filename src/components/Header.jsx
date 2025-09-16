import React, { useState, useEffect } from 'react'
import data from '../data/products.json'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${data.company.whatsapp}?text=Здравствуйте! Интересует информация о задвижках.`, '_blank')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm sm:text-lg">A</span>
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl font-heading font-bold text-gray-900 truncate">
                {data.company.name}
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">{data.company.location}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-primary-700 transition-colors duration-300"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-primary-700 transition-colors duration-300"
            >
              Продукция
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary-700 transition-colors duration-300"
            >
              О компании
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary-700 transition-colors duration-300"
            >
              Контакты
            </button>
                  <div className="flex items-center space-x-4 text-gray-700 border-l border-gray-300 pl-6 lg:pl-8">
                    <a
                      href={`tel:${data.company.phone}`}
                      className="flex items-center space-x-2 hover:text-primary-700 transition-colors duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <span className="text-sm lg:text-base">{data.company.phone}</span>
                    </a>
                    <a
                      href={`tel:${data.company.phone2}`}
                      className="text-sm lg:text-base hover:text-primary-700 transition-colors duration-300"
                    >
                      {data.company.phone2}
                    </a>
                  </div>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button 
              onClick={handleWhatsAppClick}
              className="btn-primary flex items-center space-x-1 sm:space-x-2 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
              </svg>
              <span className="hidden xs:inline sm:inline">WhatsApp</span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-900 p-2 flex-shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg mt-2 p-4 animate-fade-in shadow-lg border border-gray-200">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 text-left py-2"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 text-left py-2"
              >
                Продукция
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 text-left py-2"
              >
                О компании
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 text-left py-2"
              >
                Контакты
              </button>
                    <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
                      <a
                        href={`tel:${data.company.phone}`}
                        className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors duration-300 py-2"
                      >
                        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                        <span>{data.company.phone}</span>
                      </a>
                      <a
                        href={`tel:${data.company.phone2}`}
                        className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors duration-300 py-2 pl-7"
                      >
                        <span>{data.company.phone2}</span>
                      </a>
                    </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

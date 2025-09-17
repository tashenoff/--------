import React from 'react'
import data from '../data/products.json'

const CTA = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(data.cta.whatsappMessage)
    window.open(`https://wa.me/${data.company.whatsapp}?text=${message}`, '_blank')
  }

  const getFeatureIcon = (iconType) => {
    const icons = {
      delivery: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      payment: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      direct: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      default: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    }
    return icons[iconType] || icons.default
  }

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image */}
      {data.cta.backgroundImage && (
        <div className="absolute inset-0">
          <img 
            src={data.cta.backgroundImage} 
            alt="CTA Background"
            className="w-full h-full object-cover object-center sm:object-center md:object-center"
            loading="lazy"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/75 to-accent-800/70"></div>
        </div>
      )}
      
      {/* Fallback gradient background if no image */}
      {!data.cta.backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50"></div>
      )}

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 ${
            data.cta.backgroundImage ? 'text-white' : 'text-gray-900'
          }`}>
            {data.cta.title}
          </h2>

          {/* Description */}
          <p className={`text-lg md:text-xl mb-8 leading-relaxed ${
            data.cta.backgroundImage ? 'text-gray-200' : 'text-gray-700'
          }`}>
            {data.cta.description}
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-whatsapp-500 hover:bg-whatsapp-600 text-white font-semibold text-lg px-8 md:px-12 py-4 md:py-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3 group"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
              </svg>
              <span>{data.cta.buttonText}</span>
            </button>
          </div>

          {/* Features */}
          <div className={`mt-8 pt-6 ${
            data.cta.backgroundImage ? 'border-t border-white/20' : 'border-t border-primary-200'
          }`}>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
              {data.cta.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <svg className={`w-4 h-4 ${
                    data.cta.backgroundImage ? 'text-primary-300' : 'text-primary-600'
                  }`} fill="currentColor" viewBox="0 0 24 24">
                    <path d={getFeatureIcon(feature.icon)}/>
                  </svg>
                  <span className={data.cta.backgroundImage ? 'text-gray-200' : 'text-gray-600'}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

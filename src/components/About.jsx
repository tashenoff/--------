import React from 'react'
import data from '../data/products.json'

const About = () => {
  const getIcon = (iconName) => {
    const icons = {
      warehouse: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      quality: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      delivery: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      support: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 3v6m0 6v6m6-12h-6m-6 0h6" />
        </svg>
      )
    }
    return icons[iconName] || icons.quality
  }

  return (
    <section id="about" className="section-padding bg-gray-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="text-gray-900">О компании</span>
            <br />
            <span className="text-gradient">{data.company.name}</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {data.company.description}. Мы являемся официальным дилером заводов Казахстана. 
            Также ассортимент дополнен товарами заводов ряда других стран Турции, Дании, 
            Германии и КНР. Большой ассортимент задвижек, гарантии и высокое качество, 
            ответственность и оперативность работы персонала, деловой и индивидуальный 
            подход к каждому обратившемуся клиенту – вот что отличает нашу компанию.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-700 mb-2">10+</div>
            <div className="text-gray-700">лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-700 mb-2">1000+</div>
            <div className="text-gray-700">довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-700 mb-2">100%</div>
            <div className="text-gray-700">гарантия качества</div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {data.advantages.map((advantage, index) => (
            <div 
              key={index}
              className="card-light p-6 text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <div className="text-white">
                  {getIcon(advantage.icon)}
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                {advantage.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About


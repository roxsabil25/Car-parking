import React from 'react'
import Hero from './Hero'
import ProductsList from './ProductsList'
import ServicesGrid from './ServicesGrid'
import WhyChooseUs from './WhyChooseUs'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Hero />
        <ProductsList />
        <ServicesGrid />
        <WhyChooseUs />
        <ProductsList />
        
    </div>
  )
}

export default Home
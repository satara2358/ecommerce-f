import React from 'react'
// import '../styles/globals.css';
import { Product, FooterBanner, HeroBanner } from '../components'

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className='products-heading'>
        <h2>cualquier cosa</h2>
        <p>otra cosa</p>
      </div>

      <div className='products-container'>
        {['Product 1', 'Product 2'].map(
          (product) => product)}
      </div>
      <FooterBanner />
    </div>
  )
}

export default Home
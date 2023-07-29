import Link from 'next/link';
import React from 'react';


const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <p className='beats-solo'>Small Text</p>
      <h3>Text Medio</h3>
      <img src="" alt="headphones" className='hero-banner-image' />
      <div>
        <Link href="/product/ID">
          <button type='button'>
            ButtonText
          </button>
        </Link>
        <div className='desc'>
          <h5>Description</h5>
          <p>DESCRIPTION</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
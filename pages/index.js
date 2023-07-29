import React from 'react'
// import '../styles/globals.css';
import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client.js';

const Home = ({products, bannerData}) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className='products-heading'>
        <h2>cualquier cosa</h2>
        <p>otra cosa</p>
      </div>

      <div className='products-container'>
        {products?.map(
          (product) => product.name)}
      </div>
      <FooterBanner />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return{
    props: { products, bannerData }
  }
}

export default Home;
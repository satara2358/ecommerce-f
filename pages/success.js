import React, { useEffect } from 'react'
import { useStateContext } from '../context/StateContext'
import { BsBagCheckFill } from 'react-icons/bs'
import { runFireworks } from '../lib/utils';
import Link from 'next/link';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() =>{
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);
  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>
          Gracias por su compra!
        </h2>
        <p className='email-msg'>Recibiras tu factura en tu email </p>
        <p className='description'>
          Si tienes una pregunta escribenos
          <a className='email' href='mailto:order@example.com'>
            tecnopolis@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type='button' width='300px' className='btn'>
            Continuar Comprando
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success

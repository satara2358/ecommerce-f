import React, { useRef } from 'react'
import { useStateContext } from '../context/StateContext';
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import Link from 'next/link';
import { TiDeleteOutline } from 'react-icons/ti';
import { urlFor } from '../lib/client';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity } = useStateContext(); 
  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button
          type='button'
          className='cart-heading'
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft/>
          <span className='heading'>Su Tarjeta</span>
          <span className='cart-num-items'>({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} />
            <h3>Vacio</h3>
            <Link href="/">
              <button
                type='button'
                onClick={() => setShowCart(false)}
                className='btn'
              >
                Continuar Comprando
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className='flex bottom'>
                  <div>
                    <p className='quantity-desc'>
                      <span 
                        className="minus" 
                        onClick={() => toggleCartItemQuanitity(item._id, 'dec')}>
                          <AiOutlineMinus />
                      </span>
                      <span 
                        className="num" 
                        onClick="">{item.quantity}
                      </span>
                      <span 
                        className="plus" 
                        onClick={() => toggleCartItemQuanitity(item._id, 'inc')}>
                          <AiOutlinePlus />
                      </span>
                    </p>
                  </div>
                  <button
                    type='button'
                    className='remove-item'
                    onClick="">
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal: </h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className='btn-bontainer'>
              <button type='button' className='btn' onClick="">
                Pagar con 
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart

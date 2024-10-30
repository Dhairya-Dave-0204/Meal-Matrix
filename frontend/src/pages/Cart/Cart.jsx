import React, { useContext } from 'react'
import { StoreContext } from '../../context/storeContext'

function Cart() {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)

  return (
    <div className='mt-[100px] sm:mx-8 mb-20 sm:px-20 mx-2 px-4'>
      <div className=''>
        <div className='cart-items-title text-primary font-medium'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        
        <br />
        <hr />

        {food_list.map((item,index) => {
          if(cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title my-3">
                  <img src={item.image} alt="" className=" w-14" />

                  <p> {item.name} </p>

                  <p>${item.price} </p>

                  <p> {cartItems[item._id]} </p>

                  <p>${item.price * cartItems[item._id]} </p>

                  <p className='cursor-pointer' onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      <div className='flex flex-col-reverse md:flex-row justify-between mt-20 gap-10'>
        <div className='flex flex-1 flex-col gap-5'>
          <h2>Cart Total</h2>

          <div>
            <div className='flex justify-between'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            
            <hr className='my-3'/>
            
            <div className='flex justify-between'>
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            
            <hr className='my-3'/>
            
            <div className='flex justify-between'>
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          
          <button className='checkout text-white font-medium text-xl hover:bg-secondary hover:text-primary transition-all dura5y bg-primary p-3 rounded'>
            Proced to Checkout
          </button>
        </div>

        <div className='flex-1 md:ml-8 justify-start'>
          <div>
            <p>Have a promo code? Enter here</p>

            <div className='flex justify-between items-center rounded mt-3 bg-gray-200'>
              <input type="text" name="promo" id="promo" placeholder='Enter Promocode'
                className='bg-transparent border-none outline-none pl-3'
              />
              <button className='promo-submit'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
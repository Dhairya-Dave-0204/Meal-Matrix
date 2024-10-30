import React, { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

function PlaceOrder() {

  const { getTotalCartAmount } = useContext(StoreContext)
  
  return (
    <form className="flex items-start justify-between gap-12 mt-[100px] px-4 md:px-24 lg:px-48 py-4 mx-4 md:mx-8 my-6 md:my-20">
      <div className="place-order-left">
        <p className="font-semibold mb-12 text-3xl font-expletus">Delivery Information</p>

        <div className="flex gap-3">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>

        <input type="email" placeholder="E-mail address" />
        <input type="text" placeholder="Street" />

        <div className="flex gap-3">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="flex gap-3">
          <input type="number" placeholder="Zipcode" />
          <input type="text" placeholder="Country" />
        </div>

        <input type="tel" placeholder="Phone number" />
      </div>

      <div className="place-order-right">
        <div className="flex flex-1 flex-col gap-5">
          <h2 className='text-3xl font-expletus font-semibold'>Cart Total</h2>

          <div>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <hr className="my-3" />

            <div className='flex justify-between'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            
            <hr className='my-3'/>
            
            <div className='flex justify-between'>
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>

          <button
            className="checkout mt-8 text-white font-medium text-xl hover:bg-secondary hover:text-primary transition-all dura5y bg-primary p-3 rounded"
          >
            Proced to Payment
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;

import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/storeContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {

  const { getTotalCartAmount, token, url, cartItems, food_list } = useContext(StoreContext)

  const navigate = useNavigate()

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data => ({...data, [name]: value}))
  }

  const placeOrder = async (event) => {
    event.preventDefault()
    let orderItems = []
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item
        itemInfo["quantity"] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    }
    let response = await axios.post(url + "/api/order/place", orderData, {headers: {token}})
    if (response.data.success) {
      const {session_url} = response.data
      window.location.replace(session_url)
    } else {
      alert("Failed to place order")
    }
  }

  useEffect(() => {
    if (getTotalCartAmount() === 0) {
      alert("Add items to cart before proceeding")
      navigate("/menu")
    }
  }, [token])
  
  return (
    <form onSubmit={placeOrder} className="flex items-start justify-between gap-12 mt-[100px] px-4 md:px-24 lg:px-48 py-4 mx-4 md:mx-8 my-6 md:my-20">
      <div className="place-order-left">
        <p className="font-semibold mb-12 text-3xl font-expletus">Delivery Information</p>

        <div className="flex gap-3">
          <input required type="text" placeholder="First name"  name="firstName" onChange={onChangeHandler} value={data.firstName}/>
          <input required type="text" placeholder="Last name" name="lastName" onChange={onChangeHandler} value={data.lastName}/>
        </div>

        <input required type="email" placeholder="E-mail address" name="email" onChange={onChangeHandler} value={data.email}/>
        <input required type="text" placeholder="Street" name="street" onChange={onChangeHandler} value={data.street}/>

        <div className="flex gap-3">
          <input required type="text" placeholder="City" name="city" onChange={onChangeHandler} value={data.city}/>
          <input required type="text" placeholder="State" name="state" onChange={onChangeHandler} value={data.state}/>
        </div>

        <div className="flex gap-3">
          <input required type="number" placeholder="Zipcode" name="zipcode" onChange={onChangeHandler} value={data.zipcode}/>
          <input required type="text" placeholder="Country" name="country" onChange={onChangeHandler} value={data.country}/>
        </div>

        <input required type="tel" placeholder="Phone number" name="phone" onChange={onChangeHandler} value={data.phone}/>
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
            type="submit"
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

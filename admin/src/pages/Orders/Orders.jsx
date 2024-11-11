import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/admin_assets/assets";

function Orders({ url }) {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Error in fetching orders");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {orderId, status: event.target.value})
    if (response.data.success) {
      await fetchAllOrders()
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="w-[70%] ml-16 mt-14">
      <h3>Order Page</h3>
      <div>
        {orders.map((order, index) => (
          <div key={index} className="order-item grid items-start gap-7 border border-primary p-5 my-7 text-base">
            <img src={assets.parcel_icon} alt="" />

            <div>
              <p className="font-semibold">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>

              <p className="font-semibold mt-7 mb-1">
                {order.address.firstName + " " + order.address.lastName}
              </p>

              <div className="mb-2">
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}
                </p>
              </div>

              <p>{order.address.phone}</p>
            </div>

            <p>Items: {order.items.length}</p>

            <p className="font-semibold">${order.amount}</p>

            <select onChange={(event) => statusHandler(event, order._id)} value={order.status} name="status" id="status" className="bg-[#faf9f6] border border-primary py-2 px-4 outline-none font-medium">
              <option value="Food Processing">Food Processing</option>              
              <option value="Out for delivery">Out for delivery</option>              
              <option value="Deliverd">Deliverd</option>              
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;

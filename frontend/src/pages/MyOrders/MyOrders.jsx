import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/storeContext";
import axios from "axios";
import { assets } from "../../assets/frontend_assets/assets";

function MyOrders() {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-12 px-4 md:px-24 lg:px-48 py-4 mx-4 md:mx-8 md:my-20">
      <h2>My Orders</h2>
      <div className="flex flex-col gap-5 mt-8">
        {data.map((order, index) => {
          return (
            <div key={index} className="orders grid items-center gap-7 text-base py-2 px-5 border border-primary">
              <img src={assets.parcel_icon} alt="" className="w-12"/>
              
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              
              <p>${order.amount}.00</p>
              
              <p>Items: {order.items.length}</p>
              
              <p>
                <span className="text-primary">&#x25cf;</span> <b className="font-medium">{order.status}</b>
              </p>
              
              <button className="py-[10px] rounded bg-secondary font-medium">Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyOrders;

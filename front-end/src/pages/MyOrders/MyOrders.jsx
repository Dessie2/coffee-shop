import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import axios from 'axios';

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        url + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      console.log("Ordenes:", response.data); // útil para debug
      if (response.data.success) {
        setData(response.data.data); // ¡CORRECTO!
      } else {
        console.error("No se pudieron obtener las órdenes:", response.data.message);
      }
    } catch (error) {
      console.error("Error al obtener órdenes:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className='my-orders'>
      <h2>MY Orders</h2>
      <div className="container">
        {data.length === 0 ? (
          <p>No hay órdenes aún.</p>
        ) : (
          data.map((order, index) => (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="Parcel Icon" />
              <p>
                {order.items.map((item, i) => (
                  <span key={i}>
                    {item.name}x{item.quantity}
                    {i !== order.items.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p><span>&#x25cf;</span> <b>{order.status}</b></p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;

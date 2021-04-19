import React, { useContext, useEffect } from "react";
import axios from "axios";
import { CartContext } from "../../context/CartContext";
import "./payment.css";

function Payment() {
  const { cart } = useContext(CartContext);

  useEffect(() => {
    axios.get('https://api.rajaongkir.com/starter/province', {
      headers: {
        "key":"f133907f1cb4bd90da38c167b2274086",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.data;
      })
      .then(
        console.log()
      );
  }, []);

  return (
    <div className="card payment">
      <div className="card-body">
        <div className="card-title">Pesanan</div>
        {
          cart.forEach(item => {
            <div className="card-title">{item.title}</div>
          })
        }
      </div>
    </div>
  )
}

export default Payment;
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import CartItem from "../../components/CartItem";
import { CartContext } from "../../context/CartContext";
import "./home.css";

function Home() {
  let history = useHistory();
  const { cart } = useContext(CartContext);
  const [product, setProduct] = useState([]);

  const handlePayment = () => {
    history.push('/payment');
  };

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        return response.data;
      })
      .then(data => {
        data.map(product => {
          product.price *= 1000;
          product.weight = 1000;
          product.seller = {
            "id": 1,
            "name": "Sri Rejeki",
            "province_id": 5,
            "city_id": 419
          };
          return product;
        })
        setProduct(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div className="row">
          <div className="col-8 mt-2">
            <div className="row">
              {product.length !== 0 ?
                product.map((product) => {
                  return <ProductCard data={product} key={product.id} />
                })
                : <h1 className="col">Loading</h1>}
            </div>
          </div>
          <div className="col-4 mt-4">
            <h2>Cart</h2>
            {cart.length !== 0 ?
              cart.map(cart => {
                return <CartItem data={cart} key={cart.id} />
              })
              : <h3>Cart is empty</h3>}
            <button className="btn-primary mt-2" onClick={handlePayment}>Go to payment</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;

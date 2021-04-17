import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import "./home.css";

function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        return response.data;
      })
      .then(json => {
        json.map(product => {
          product.price *= 1000
          product.weight = 1000
          product.seller = {
            "id": 1,
            "name": "Sri Rejeki",
            "province_id": 5,
            "city_id": 419
          }
        })
        setProduct(json);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div className="row">
          <div className="col-8 mt-2">
            <div className="product-list">
              {product ?
                product.map(product => {
                  return <ProductCard data={product} key={product.id} />
                })
                : "Loading"}
            </div>
          </div>
          <div className="col-4 mt-4">
            <h2>Cart</h2>
            {/* {cart ? (
              <h3>
                {console.log(cart)}
              </h3>
            ) : (
              <h3>cart is empty</h3>)} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ data }) {
  const { cart, setCart } = useContext(CartContext);
  const addToCart = (data) => {
    if (data.itemInCart === undefined) {
      data.itemInCart = 1;
      setCart([...cart, data]);
    } else {
      cart.forEach(item => {
        if(item.id === data.id ) item.itemInCart++;
        setCart([...cart]);
      });
    }
  };
  return <div className="col-4">
    <div className="card">
      <img className="card-img-top" src={data.image} alt={data.title} />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text product-category">{data.category}</p>
        <p className="card-text product-description">{data.description}</p>
        <p className="card-text product-price font-weight-bold">{`Rp.${data.price}`}</p>
        <button className="btn-primary" onClick={() => addToCart(data)}>Add to cart</button>
      </div>
    </div>
  </div >
}

export default ProductCard;

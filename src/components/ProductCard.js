import React, { useContext } from "react";

function ProductCard({ data }) {

  const addToCart = data => { }

  return <div key={data.id}>
    <div className="card m-2">
      <img className="card-img-top" src={data.image} alt={data.title} />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text product-category">{data.category}</p>
        <p className="card-text product-description">{data.description}</p>
        <p className="card-text product-price font-weight-bold">{`Rp.${data.price}`}</p>
        <button className="btn-primary" onClick={addToCart(data)}>Add to cart</button>
      </div>
    </div>
  </div>
}

export default ProductCard;
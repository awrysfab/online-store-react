import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ data }) {
  const { cart, setCart } = useContext(CartContext);

  const addAmount = (data) => {
    data.itemInCart++;
    setCart([...cart]);
  };
  const reduceAmount = (data) => {
    data.itemInCart--;
    if (data.itemInCart === 0) {
      removeItem(data);
    } else {
      setCart([...cart]);
    }
  };
  const removeItem = (data) => {
    data.itemInCart = undefined;
    const filtered = cart.filter(item => item.id !== data.id);
    setCart([...filtered]);
  };
  return <div className="card">
    <div className="card-body">
      <div className="card-title">{data.title}</div>
      <div className="card-text">{`Rp.${data.price} x ${data.itemInCart} = Rp.${data.price * data.itemInCart}`}</div>
      <div className="row">
        <button className="col-3 btn-danger" onClick={() => removeItem(data)}>remove</button>
        <button className="col-3 btn-secondary" onClick={() => reduceAmount(data)}>-</button>
        <button className="col-3 btn-primary" onClick={() => addAmount(data)}>+</button>
      </div>
    </div>
  </div>
}

export default CartItem;

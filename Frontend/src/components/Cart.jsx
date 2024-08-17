import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inc, decrement,remove } from '../redux/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.carter.cart);
  const dispatch = useDispatch();
  
  const [total, setTotal] = useState(0);
  
  const totalPrice = useMemo(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price * item.quantity;
    });
    console.log("inside",sum);
    return sum;
  }, [cart]);
  
  let totalCount = 0;
  cart.forEach((item) => {
    totalCount += item.quantity;
  });
  console.log("outside",totalCount);
  // Delivery fee and total with delivery fee
  const deliveryFee = 300.00; // Example delivery fee
  const totalWithDelivery = useMemo(() => totalPrice + deliveryFee, [totalPrice, deliveryFee]);

  const handleRemove = (item) => {
    dispatch(decrement(item));
  };

  const handleAdd = (item) => {
    dispatch(inc(item));
  };
  const removeProduct = (item) =>{
    dispatch(remove(item));
  };

  if (cart.length === 0) {
    return <p>CART EMPTY</p>;
  }

  return (
    <div className='blockk' >
      {cart.map((item) => (
        <div key={item.id} className="product-item">
          <img src={item.image} alt={item.title} width={50} />
          <h2>{item.title}</h2>
          <p>Price:Rs.{item.price}</p>
          <button className="plus " onClick={() => handleAdd(item)}>+</button> {item.quantity}
          <button className="minus " onClick={() => handleRemove(item)}>-</button>
          <button className="remove " onClick={() => removeProduct(item)}>Remove</button>
        </div>
      ))}
      <div className="price-details">
        <h3>Price Details</h3>
        <div className="price-detail-row">
          <span>Subtotal ({totalCount} items):</span>
          <span>Rs.{totalPrice.toFixed(2)}</span>
        </div>
        <div className="price-detail-row">
          <span>Delivery Fee:</span>
          <span>Rs.{deliveryFee.toFixed(2)}</span>
        </div>
        <div className="price-detail-row">
          <span>Total:</span>
          <span>Rs.{totalWithDelivery.toFixed(2)}</span>
        </div>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
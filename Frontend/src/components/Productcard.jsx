import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { increment } from '../redux/counterSlice';
import { inc } from '../redux/cartSlice';
import { toast } from 'react-toastify';
// import PropTypes from 'prop-types'; // Optional but useful for type checking

const ProductCard = ({ item }) => {
    const cart = useSelector((state) => state.carter.cart);
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
    const dispatch = useDispatch();

    const addItem = () => {
        dispatch(inc(item));
        toast.success("added to cart");
    };

    const handleIncrement = () => {
        dispatch(increment(1)); // Ensure this is the correct action and parameter
    };

    return (
        <div className="container">
            
                <div className="card">
                    <img src={item.image} alt={item.title} className="image" />
                    <div className="content">
                    <Link to={`/products/Rs.{item.id}`}>
                        <h2 className="title">{item.title}</h2>
                        <p className="description">{item.description}</p>
                        <p className="price">Rs.{item.price.toFixed(2)}</p>
                        <p className="rating">

                            Rating: {item.rating.rate} ({item.rating.count} reviews)
                        </p>

                        </Link>
                        {isItemInCart ? (
                            <Link to="/cart">
                                <button className="newn">Add To Cart</button>
                            </Link>
                        ) : (
                            <button className="newn" onClick={addItem}>Add To Cart</button>
                        )}
                    </div>
                </div>
        </div>
    );
};
export default ProductCard;
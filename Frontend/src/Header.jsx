import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from './components/Login';
import "./index.css"

const Header = (props) => {
    console.log("props=>", props);
    // Retrieve count from the Redux store
    const count = useSelector((state) => state.counter.count);
    const cart = useSelector((state) => state.carter.cart);
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    return (
        <header className="header">
            <div className="logo-container">
                <img className='logo-img' src="https://scontent-tir3-1.xx.fbcdn.net/v/t39.30808-6/361670890_738637888062196_6467137619542674306_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=x_YmnR555LcQ7kNvgE5nuJy&_nc_ht=scontent-tir3-1.xx&oh=00_AYBUcG3BxOTUu5idcft9FMvAAV3uwH_Qbm30b0XVDYcSWw&oe=66C2063A"/>
                <p className="logo">Farmily</p>
            </div>
            <nav className="nav">
                <Link  to="/" className="nav-item">PRODUCTS</Link>
                <Link to="/cart" className="nav-item">CART - {totalQuantity}</Link>
                <Link  to="/login" className="nav-item">LOGIN</Link>
                <Link  to="/signup" className="nav-item">SIGNUP</Link>
            </nav>
        </header>
    );
};

export default Header;
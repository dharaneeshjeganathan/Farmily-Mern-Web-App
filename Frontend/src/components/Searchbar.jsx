import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../redux/productSlice';

const Searchbar = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        dispatch(searchProduct(searchText));
    };

    return (
        <div className="searchbar-container">
            <input 
                value={searchText} 
                onChange={handleInputChange} 
                type="text" 
                placeholder="Search" 
                className="search-input" 
            />
            <button className="search-button" onClick={handleSearch}> Search </button>
        </div>
    );
};

export default Searchbar;
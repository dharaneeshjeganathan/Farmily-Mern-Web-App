import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import Productcard from './Productcard';
import Searchbar from './Searchbar';
import axios from 'axios'

const Products = (props) => {
    useEffect(() => {
        getProduct("");
    },
    []); 
const getProduct = async (props) => {
    const res = await axios.get("http://localhost:3001/products");
    console.log(res.data);
};

const listItems = useSelector((state) => state.product.items);
if(listItems.length === 0)
{
    return (
        <h3> NO ITEMS FOUND</h3>
    );
}
    return (
        <>
            <Searchbar />
            <div className="Productsc-container">
                {listItems.length === 0 ? (
                    <p>NO ITEMS FOUND</p>
                ) : (
                    listItems.map((item) => (
                        <Productcard key={item.id} item={item} setCart={props.setCart} cart={props.cart} />
                    ))
                )}
            </div>
        </>
    );
};

export default Products;
import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data  => setProducts(data))

    },[])

    const handleAddtocart = (product) => {
        console.log(product);
        // cart.push(product)

        const newCart = [...cart , product]
        setCart(product);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                products.map(product => <Product 
                key={product.id}
                product={product}
                handleAddtocart={handleAddtocart}
                ></Product>)
               }
            </div>
            <div className="cart-container">
                <h4>this is for order summery</h4>
                <p className='pokimon'>selected item : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;
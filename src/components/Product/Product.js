import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product, handleAddtocart}) => {
    const {name, img, seller, price, ratings} = product; 
    return (
        <div className='product'>
           <img src={img} alt="pic" />
        <div className="product-info">
        <p className='product-name'>{name}</p>
           <p className='product-name'>Price: ${price}</p>
           <p> <small>seller:{seller}</small> </p>
           <p> <small>ratings :{ratings} stars</small> </p>
        </div>
        <button onClick={() => handleAddtocart(product)} className='btn-cart'> 
            <p className='btn-text'>add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
        </div>
    );
};

export default Product;
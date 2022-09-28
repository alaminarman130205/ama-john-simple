import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
         <h4>this is for order summery</h4>
                <p className='pokimon'>selected item : {cart.length}</p>
        </div>
    );
};

export default Cart;
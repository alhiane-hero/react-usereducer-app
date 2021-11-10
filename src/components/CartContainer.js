import React from 'react';
import CartItem from './CartItem';
import {useGlobalContext} from '../context/Context';

function CartContainer() {

    const {cart, clearCart, total} = useGlobalContext();

    if (cart.length === 0) {
        return (
            <div className='cart-container'>
                <header>
                    <h2>YOUR BAG</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </div>
        );
    }

    return (
        <div className='cart-container'>
            <header>
                <h2>YOUR BAG</h2>
            </header>
            <section className='cart-body'>
                <div className='cart-items'>{
                    cart.map(cartItem => {
                        return <CartItem key={cartItem.id} {...cartItem} />
                    })
                }</div>
            </section>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>Total <span>${total}</span></h4>
                </div>
                <button className='btn clear-btn' onClick={clearCart}>
                    Clear Cart
                </button>
            </footer>
        </div>
    );
}

export default CartContainer;

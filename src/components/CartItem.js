import React from 'react';
import {useGlobalContext} from '../context/Context';
import {FiChevronUp, FiChevronDown} from 'react-icons/fi';

function CartItem({id, title, price, img, amount}) {

    const {removeItem, toggleAmount} = useGlobalContext();

    return (
        <article className='cart-item'>
            <img className='item-img' src={img} alt={title} />
            <div className='item-info'>
                <h4 className='item-title'>{title}</h4>
                <h4 className='item-price'>{price}</h4>
                <button className='btn remove-btn'
                    onClick={_ => removeItem(id)}>
                    remove
                </button>
            </div>
            <div className='increase-decrease'>
                <button className='btn amount-btn' 
                    onClick={_ => toggleAmount(id, 'INCREASE')}>
                    <FiChevronUp />
                </button>
                <p className='amonut'>{amount}</p>
                <button className='btn amount-btn' 
                    onClick={_ => toggleAmount(id, 'DECREASE')}>
                    <FiChevronDown />
                </button>
            </div>
        </article>
    );
}

export default CartItem;

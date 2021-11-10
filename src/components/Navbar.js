import React from 'react';
import {useGlobalContext} from '../context/Context';
import {FaShoppingBag} from 'react-icons/fa';

function Navbar() {

    const {amount} = useGlobalContext();

    return (
        <nav>
            <div className='nav-center'>
                <h3>UseReducer</h3>
                <div className='nav-container'>
                    <FaShoppingBag />
                    <div className='amount-container'>
                        <p className='total-amount'>{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

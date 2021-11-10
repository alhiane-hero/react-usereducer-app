import React from 'react';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import {useGlobalContext} from './context/Context';

function ProviderApp() {
    const { loading } = useGlobalContext();

    if (loading) {
        return (
        <div className='loading'>
            <h1>Loading...</h1>
        </div>
        )
    }
    
    return (
        <main>
            <Navbar />
            <CartContainer />
        </main>
    );
}

export default ProviderApp;

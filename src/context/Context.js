import React, {useContext, useReducer, useEffect} from 'react';
import cartItems from '../data/Data';
import reducer from '../reducer/Reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'});
    }
    const removeItem = (id) => {
        dispatch({type: 'REAMOVE_ITEM', payload: id});
    }
    const fetchData = async () => {
        dispatch({type: 'LOADING'});
        const response = await fetch(url)
        const cart = await response.json();
        dispatch({type: 'DISPLAY_ITEMS', payload: cart});
    }
    const toggleAmount = (id, type) => {
        dispatch({type: 'TOGGLE_AMOUNT', payload: {id, type}});
    }

    useEffect(_ => {
        fetchData();
    }, []);

    useEffect(_ => {
        dispatch({type: 'GET_TOTALS'});
    }, [state.cart]);

    return (
        <AppContext.Provider value={{
            ...state,
            clearCart,
            removeItem,
            toggleAmount
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = _ => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};
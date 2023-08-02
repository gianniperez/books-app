import { createContext, useContext } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error('AppContext must be within appContextProvider');
    }

    return context;
};

const AppContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]);
    const [results, setResults] = useState([]);
    const [book, setBook] = useState();

    const addToFavorites = (book) => {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.concat(book);
        setFavorites(newFavorites);
    }

    const addToCart = (book) => {
        const oldCart = [...cart];
        const newCart = oldCart.concat(book);
        setCart(newCart);
    }

    const addToResults = (book) => {
        const oldResults = [];
        const newResults = oldResults.concat(book);
        setResults(newResults);
    }

    const removeFromFavorites = (id) => {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.filter((book) => book.id !== id);
        setFavorites(newFavorites);
    }

    const removeFromCart = (id) => {
        const oldCart = [...cart];
        const newCart = oldCart.filter((book) => book.id !== id);
        setCart(newCart);
    }

    return (
        <AppContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, cart, addToCart, removeFromCart, results, addToResults, book, setBook }}>
            {children}
        </AppContext.Provider>
    );
};

AppContextProvider.propTypes = {
    children: PropTypes.node,
};

export default AppContextProvider;
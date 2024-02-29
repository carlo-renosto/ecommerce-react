import { createContext, useContext, useState } from "react"

const cartContext = createContext();

export const { Provider } = cartContext;

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [cartItemsTotal, setCartItemsTotal] = useState(0);

    const getCart = () => {
        return cart;
    }

    const getCartItemsTotal = () => {
        return cartItemsTotal;
    }

    const getCartPriceTotal = () => {
        let total = 0;
        cart.forEach(item => {
            let subtotal = item.price * item.quantity;
            total += subtotal;
        });

        return total;
    }

    const addCartItem = (item, quantity) => {
        const index = cart.findIndex(itm => itm.id === item.id);
        if(index !== -1) {
            cart[index].quantity += quantity;
            return;
        }

        item.quantity = quantity;
        setCart([...cart, item]);
        setCartItemsTotal(cartItemsTotal + quantity);
    }

    const contextValue = {getCart, getCartItemsTotal, getCartPriceTotal, addCartItem};
    return <Provider value={contextValue}>{children}</Provider>
}

export const useCartContext = () => {
    return useContext(cartContext);
}

export default CartProvider;
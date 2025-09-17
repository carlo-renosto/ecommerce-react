import { createContext, useContext, useState, useEffect, useRef } from "react"
import { db } from "../../config/config"
import { collection, doc, addDoc, updateDoc } from "firebase/firestore"

const cartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || [];
    });
    const [cartItemsTotal, setCartItemsTotal] = useState(0)

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || []
        setCart(savedCart)
        setCartItemsTotal(savedCart.reduce((sum, item) => sum + item.quantity, 0))
    }, [])

    const firstRender = useRef(true);

    useEffect(() => {
        if(firstRender.current) {
            firstRender.current = false;
            return;
        }
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const getCart = () => cart
    const getCartItemsTotal = () => cartItemsTotal
    const getCartPriceTotal = () =>
        cart.reduce((total, item) => total + item.price * item.quantity, 0)

    const addCartItem = (item, quantity) => {
        const index = cart.findIndex((itm) => itm.id === item.id)
        let updatedCart

        if (index !== -1) {
        updatedCart = [...cart]
        updatedCart[index].quantity += quantity
        } else {
        updatedCart = [...cart, { ...item, quantity }]
        }

        setCart(updatedCart)
        setCartItemsTotal(updatedCart.reduce((sum, itm) => sum + itm.quantity, 0))
    }

    const deleteCartItem = (item) => {
        const updatedCart = cart.filter((itm) => itm.id !== item.id)
        setCart(updatedCart)
        setCartItemsTotal(updatedCart.reduce((sum, itm) => sum + itm.quantity, 0))
    }

    const clearCart = () => {
        setCart([])
        setCartItemsTotal(0)
    }

    const buyCart = async (order) => {
        const orderRef = await addDoc(collection(db, "orders"), order)

        const itemCollection = collection(db, "products")
        cart.forEach((item) => {
        item.stock -= item.quantity
        const itemRef = doc(itemCollection, item.id)
        updateDoc(itemRef, item)
        })

        clearCart()
        return orderRef.id
    }

    const contextValue = {
        getCart,
        getCartItemsTotal,
        getCartPriceTotal,
        addCartItem,
        deleteCartItem,
        clearCart,
        buyCart,
    }

    return (
        <cartContext.Provider value={contextValue}>
        {children}
        </cartContext.Provider>
    )
}

const useCartContext  = () => useContext(cartContext);
export { useCartContext  };

export default CartProvider

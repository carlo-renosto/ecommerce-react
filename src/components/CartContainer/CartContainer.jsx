import styles from "./CartContainer.module.scss"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import { useCartContext } from "../../routing/context/CartContext"

const CartContainer = () => {
    const { getCart, getCartPriceTotal, deleteCartItem, clearCart } = useCartContext();
    const cart = getCart();
    const total = getCartPriceTotal();

    const onClear = () => {
        clearCart();
    }

    return cart.length > 0 ? (
        <div className={styles.cart}>
            <div className={styles.cart_header}>
                <h1 className={styles.cart_title}>Carrito</h1>
                <button className={styles.cart_clear} onClick={() => onClear()}>Vaciar</button>
            </div>
            <CartItem cart={cart} deleteCartItem={deleteCartItem}/>
            <h3 className={styles.cart_total}>Total: ${total}</h3>
            <Link to="/cart/checkout-form"><button>Comprar</button></Link>
        </div>
    ) :
    (
        <div className={styles.cart_empty}>
            <h1>Carrito vacío</h1>
        </div>
    )
}

export default CartContainer;
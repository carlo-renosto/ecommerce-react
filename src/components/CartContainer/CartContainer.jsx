import styles from "./CartContainer.module.scss"
import CartItem from "../Cart/CartItem"
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
            <h1 className= {styles.item_center}>Carrito</h1>

            <div className={styles.item_center}>
                <button onClick={() => onClear()}>Vaciar</button>
            </div>
            
            <CartItem cart={cart} deleteCartItem={deleteCartItem}/>

            <h3 style={{marginLeft: "5px"}}>Total: ${total}</h3>

            <div className={styles.item_center}>
                <Link to="/cart/checkout-form"><button>Comprar</button></Link>
            </div>
        </div>
    ) :
    (
        <div className={styles.item_center}>
            <h1>Carrito vacío</h1>
        </div>
    )
}

export default CartContainer;
import styles from "./CartContainer.module.scss"
import CartItem from "../Cart/CartItem"
import { useCartContext } from "../../routing/context/CartContext"

const CartContainer = () => {
    const { getCart, getCartPriceTotal } = useCartContext();
    const cart = getCart();
    const total = getCartPriceTotal();

    return cart.length > 0 ? (
        <div className={styles.cart}>
            <h1 className= {styles.item_center}>Carrito</h1>
            
            <CartItem cart={cart}/>

            <h3 style={{marginLeft: "5px"}}>Total: ${total}</h3>

            <div className={styles.item_center}>
                <button>Comprar</button>
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
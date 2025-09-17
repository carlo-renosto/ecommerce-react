import styles from "./CartWidget.module.scss"
import { Link } from 'react-router-dom'
import { useCartContext } from "../../routing/context/CartContext"

function CartWidget() { 
    const { getCartItemsTotal } = useCartContext();

    return (
        <Link to="/cart" className={styles.link_decoration}>
            <div className={styles.cart_widget_container}>
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
                <p className={styles.cart_amount}>{getCartItemsTotal()}</p>
            </div>
        </Link>
    )
}

export default CartWidget;
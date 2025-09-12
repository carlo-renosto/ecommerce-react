import styles from "./CartWidget.module.scss"
import { Link } from 'react-router-dom'
import cartwidget from "../../assets/cartwhite.png"
import { useCartContext } from "../../routing/context/CartContext"

function CartWidget() { 
    const { getCartItemsTotal } = useCartContext();

    return (
        <Link to="/cart" className={styles.link_decoration}>
            <div className={styles.cart_widget_container}>
                <img className={styles.cart_widget} src={cartwidget}></img>
                <p className={styles.cart_amount}>{getCartItemsTotal()}</p>
            </div>
        </Link>
    )
}

export default CartWidget;
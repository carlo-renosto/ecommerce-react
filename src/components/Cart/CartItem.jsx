import styles from "./CartItem.module.scss"
import { Link } from "react-router-dom"

const CartItem = ({cart}) => {
    return (
        <div>
            {cart.map(({id, title, image, price, quantity}, index) => (
                <div key={index} style={{marginLeft: "5px"}}> 
                    <Link to={`/product/${id}`} className={styles.item_link}>
                        <img className={`${styles.item_img}`} src={image} alt={title}/>
                        <p className={`${styles.item_title}`}>{title}</p>
                    </Link>

                    <ul>
                        <li>${price}</li>
                        <li>{quantity} unidades</li>
                        <li>Subtotal: ${price * quantity}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default CartItem;
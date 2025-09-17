import styles from "./CartItem.module.scss"
import { Link } from "react-router-dom"

const CartItem = ({cart, deleteCartItem}) => {
    const onDeleteProduct = (id, quantity) => {
        deleteCartItem({id, quantity});
    }

    return (
        <>
            {cart.map(({id, title, image, price, quantity}, index) => (
                <div key={index} className={styles.cart_item}> 
                    <div className={styles.item_div_img}>
                        <img className={styles.item_img} src={image} alt={title}/>
                    </div>
                    <div className={styles.item_div_detail}>
                        <div className={styles.item_div_detail_header}>
                             <Link to={`/product/${id}`}>
                                <p className={styles.item_title}>{title}</p>
                            </Link>
                            <Link to="/cart">
                                <button className={styles.item_delete} onClick={() => onDeleteProduct(id, quantity)}>
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                            </Link>
                        </div>

                        <h3>${price}</h3>
                        <p>Subtotal: ${price * quantity} ({quantity} unidades)</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CartItem;
import styles from "./CartContainer.module.scss"
import CartItem from "../Cart/CartItem"
import { useCartContext } from "../../routing/context/CartContext"
import { db } from '../../config/config'
import { collection, addDoc } from "firebase/firestore";

const CartContainer = () => {
    const { getCart, getCartPriceTotal, deleteCartItem, clearCart, buyCart } = useCartContext();
    const cart = getCart();
    const total = getCartPriceTotal();

    const onClear = () => {
        clearCart();
    }

    const onBuy = async() => {
        const order = {
            products: cart.map((product) => ({
                id: product.id,
                price: product.price,
                quantity: product.quantity,
                subtotal: product.price * product.quantity,
            })),
            total: total
        }
        
        const orderId =  await buyCart(order);

        swal({title: "Compra exitosa", text: `ID orden: ${orderId} \n Precio total: $${total}`, icon: "success"});
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
                <button onClick={() => onBuy()}>Comprar</button>
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
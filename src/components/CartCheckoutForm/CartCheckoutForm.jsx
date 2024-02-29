import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CartCheckoutForm.module.scss"
import { useCartContext } from "../../routing/context/CartContext"

const CartCheckoutForm = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const { getCart, getCartPriceTotal, buyCart } = useCartContext();
    
    const cart = getCart();
    const total = getCartPriceTotal();

    const onChangeHandler = (event) => {
        switch(event.target.id) {
            case "n": setName(event.target.value); break;
            case "s": setSurname(event.target.value); break;
            case "e": setEmail(event.target.value); break;
        }
    }

    const onBuy = async(event) => {
        event.preventDefault();

        const order = {
            name: name,
            surname: surname,
            email: email,
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
        navigate("/cart");
    }

    return (
            <form onSubmit={onBuy} className={styles.form}>
                <h1>Checkout</h1>
                <input id="n" type="text" value={name} onChange={onChangeHandler} placeholder="Nombre" required/>
                <input id="s" type="text" value={surname} onChange={onChangeHandler} placeholder="Apellido" required/>
                <input id="e" type="email" value={email} onChange={onChangeHandler} placeholder="Email" required/>
                <button type="submit">Comprar</button>
            </form>
    )
}

export default CartCheckoutForm;
import { useState } from "react"
import swal from "sweetalert"
import styles from "./ItemDetail.module.scss"
import { Link } from "react-router-dom"
import ItemAdd from "../ItemAdd/ItemAdd"
import { useCartContext } from "../../routing/context/CartContext"
import ItemBuy from "../ItemBuy/ItemBuy"

const ItemDetail = ({item}) => {
    const [itemCountVisible, setItemCountVisible] = useState(true);
    const { title, description, price, stock, image } = item;
    const { addCartItem } = useCartContext();

    const onAdd = (count) => {
        if(count <= item.stock) {
            addCartItem(item, count);
            swal(`Producto ${title} (${count}) añadido al carrito`);
            
            setItemCountVisible(false);
        }
        else {
            swal({title: "Error", text: "Stock insuficiente", icon: "error"});
        }
    }

    const onBuy = (count) => {
        // TODO
    }

    return (
        <div className={styles.item}>
            <div className={styles.item_div_img}>
                <img className={styles.item_img} src={image} alt="product"/>
            </div>
            <div className={styles.item_detail}>
                <h1>{title}</h1>
                <h2>${price}</h2>
                <p>{description}</p>
                <div className={styles.item_options}>
                    {itemCountVisible && (
                        <div>
                            <ItemBuy onBuy={onBuy} itemStock={stock}/>
                            <ItemAdd onAdd={onAdd} itemStock={stock}/>
                        </div>
                    )}
                    {!itemCountVisible && (
                        <Link to="/cart"><div className={styles.item_center}><button>Ir al carrito</button></div></Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;

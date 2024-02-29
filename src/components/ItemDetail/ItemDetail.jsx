import { useState } from "react"
import swal from "sweetalert"
import styles from "./ItemDetail.module.scss"
import ItemCount from "../ItemCount/ItemCount"
import { useCartContext } from "../../routing/context/CartContext"

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

    return (
        <div className={styles.item}>
            <div>
                <p className={styles.item_center}>{title}</p>
                <p className={styles.item_center}>{description}</p>
                <img className={styles.item_img} src={image} alt="product"/>
                <p className={styles.item_center}>${price}</p>
                <p className={styles.item_center}>Stock: {stock} unidades</p>
                {itemCountVisible && <ItemCount onAdd={onAdd}/>}
                {!itemCountVisible && <p className={styles.item_center}>Producto añadido al carrito</p>}
            </div>
        </div>
    )
}

export default ItemDetail;

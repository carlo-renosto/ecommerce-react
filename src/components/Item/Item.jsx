import styles from "./Item.module.scss"
import { Link } from 'react-router-dom'

const Item = ({title, id, image, price}) => {
    return (
        <div >
            <Link to={`/product/${id}`}>
                <div className={styles.item}>
                    <div className={styles.item_div_img}>
                        <img className={styles.item_img} src={image} alt={id+"-"+title}/>
                    </div>
                    <div>
                        <p className={styles.item_title}>{title}</p>
                        <div className={styles.item_price}>
                            <h3>${price}</h3>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;

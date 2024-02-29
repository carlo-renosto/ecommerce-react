import styles from "./Item.module.scss"
import { Link } from 'react-router-dom'

const Item = ({title, id, image, price}) => {
  return (
      <div className={styles.item}>
          <div>
              <p className={styles.item_center}>{title}</p>
              <img className={styles.item_img} src={image} alt={id+"-"+title}></img>
              <p className={`${styles.item_center} ${styles.item_price}`}>${price}</p>
              <div className={`${styles.item_center} ${styles.item_btn}`}><Link to={`/product/${id}`} ><button>Ver más</button></Link></div>
          </div>
      </div>
  )
}

export default Item;

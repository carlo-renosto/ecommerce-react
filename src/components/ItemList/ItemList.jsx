import styles from "./ItemList.module.scss"
import Item from '../Item/Item'

function ItemList({itemList}) {
  return <div className={styles.item_list}>
      {itemList.map(({title, id, image, price}, index) => {
          return <Item key={index} title={title} id={id} image={image} price={price}/>
      })}
  </div>
}

export default ItemList;

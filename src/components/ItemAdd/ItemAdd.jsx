import { useState } from "react"
import styles from './ItemAdd.module.scss'

const ItemAdd = ({onAdd, itemStock}) => {
    const [count, setCount] = useState(1);
    var stock = [];
    
    for(let i = 1; i <= itemStock; i++) {
        stock.push(i);
    }

    const onChangeHandler = (event) => {
        const num = parseInt(event.target.value);

        if(num <= 0 || num > itemStock) {
            setCount(1);
            return;
        }

        setCount(num);
    }

    return (
        <div>
            <button className={styles.item_button} onClick={() => onAdd(count)}>Añadir</button>
            <select className={styles.item_select} onChange={onChangeHandler}>
                {stock.map((quant) => (
                    <option key={quant} value={quant}>
                        {quant}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ItemAdd;
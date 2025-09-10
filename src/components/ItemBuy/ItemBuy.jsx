import { useState } from "react"
import styles from './ItemBuy.module.scss'

const ItemBuy = ({onBuy, itemStock}) => {
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
            <button onClick={() => onBuy(count)}>Comprar</button>
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

export default ItemBuy;
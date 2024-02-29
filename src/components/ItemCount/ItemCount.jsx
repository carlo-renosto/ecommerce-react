import React from "react"
import { useState } from "react"

const ItemCount = ({onAdd}) => {
    const [count, setCount] = useState(1);

    const onChangeHandler = (event) => {
        const num = parseInt(event.target.value);

        if(num <= 0 || num > 99) {
            setCount(1);
            return;
        }

        setCount(num);
    }

    return (
        <div style={{textAlign: "center"}}>
            <div>
                <input type="button" value="-" onClick={() => count > 1 ? setCount(count-1) : 1}/>
                <input type="number" value={count} onChange={onChangeHandler}/>
                <input type="button" value="+" onClick={() => setCount(count+1)}/>
            </div>
            <input id="btn" type="button" value="Añadir" onClick={() => onAdd(count)}/>
        </div>
    )
}

export default ItemCount;
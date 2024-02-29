import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner'
import { getProductsAsync } from '../../utils/mock'

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    getProductsAsync().then((products) => {
      if(cid) {
        const productsFiltered = products.filter((product) => product.category === cid);
        setItems(productsFiltered);
      } 
      else {
        setItems(products);
        setLoading(false);
      }
    });
  }, [cid]);

  return loading ? (<Spinner/>) : (<><ItemList itemList={items}/></>)
}

export default ItemListContainer;

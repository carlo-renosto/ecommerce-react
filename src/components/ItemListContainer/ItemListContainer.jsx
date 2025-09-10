import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner'
import { db } from '../../config/config'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");

    if(cid) {
      const productsQuery = query(productsCollection, where("category", "==", cid));

      getDocs(productsQuery).then(({docs}) => {
        const products = docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(products);
        setLoading(false);
      });
    } 
    else {
      getDocs(productsCollection).then(({docs}) => {
        const products = docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setItems(products);
        setLoading(false);
      });
    }    
  }, [cid]);

  return loading ? (<Spinner/>) : (<><ItemList itemList={items}/></>)
}

export default ItemListContainer;

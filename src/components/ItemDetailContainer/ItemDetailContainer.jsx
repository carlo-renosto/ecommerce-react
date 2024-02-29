import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'
import { db } from '../../config/config'
import { collection, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState();
  const { pid } = useParams();

  useEffect(() => {
    const productCollection = collection(db, "products");

    const refDoc = doc(productCollection, pid);

    getDoc(refDoc).then((doc) => {
      setItem({id: doc.id, ...doc.data()});
      setLoading(false);
    });
  }, [pid]);

  return loading ? <Spinner/> : <ItemDetail item={item}/>
}

export default ItemDetailContainer;

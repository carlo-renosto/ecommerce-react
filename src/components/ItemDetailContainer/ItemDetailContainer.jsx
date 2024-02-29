import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'
import { getProductAsyncById } from '../../utils/mock'

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState();
  const { pid } = useParams();

  useEffect(() => {
    getProductAsyncById(pid).then((product) => {
      setItem(product);
      setLoading(false);
    });
  }, [pid]);

  return loading ? <Spinner/> : <ItemDetail item={item}/>
}

export default ItemDetailContainer;

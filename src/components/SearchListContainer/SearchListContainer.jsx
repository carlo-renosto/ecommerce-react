import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner'
import { db } from '../../config/config'
import { collection, getDocs, query, where } from 'firebase/firestore'

const SearchListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { cid } = useParams();

    const [searchParams] = useSearchParams();
    var textQuery = searchParams.get("text");

    useEffect(() => {
        const productsCollection = collection(db, "products");

        if(cid) {
            const productsQuery = query(
                productsCollection, 
                where("category", "==", cid),
                where("titleLower", ">=", textQuery),
                where("titleLower", "<=", textQuery + "\uf8ff")
            );
            
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
            const productsQuery = query(
                productsCollection, 
                where("titleLower", ">=", textQuery),
                where("titleLower", "<=", textQuery + "\uf8ff")
            );

            getDocs(productsQuery).then(({docs}) => {
                const products = docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setItems(products);
                setLoading(false);
            });
        }
    }, [cid, textQuery]);

    return loading ? (<Spinner/>) : (<><ItemList itemList={items}/></>)
}

export default SearchListContainer;
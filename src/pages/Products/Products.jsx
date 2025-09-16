import Dashboard from "../../components/Dashboard/Dashboard"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useSearchParams } from "react-router-dom";
import SearchListContainer from "../../components/SearchListContainer/SearchListContainer";

const Products = () => {
    const [searchParams] = useSearchParams();
    
    return (
        <Dashboard>
          {searchParams.size > 0 ? (<SearchListContainer />) : (<ItemListContainer />)}
        </Dashboard>
    )
}

export default Products;
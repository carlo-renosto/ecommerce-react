import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Searcher.module.scss';
import SearcherButton from './SearcherButton/SearcherButton';
import SearcherDropdown from './SearcherDropdown/SearcherDropdown';
import SearcherText from './SearcherText/SearcherText';

const Searcher = () => {
    const [text, setText] = React.useState("");
    const [category, setCategory] = React.useState("all");
    const navigate = useNavigate();

    const onSearch = (event) => {
        event.preventDefault();
        if(category === "all") {
            if(text.trim().length > 0) {
                navigate(`/products?text=${text}`);
            }
            else {
                navigate("/products");
            }
        }
        else {
           if(text.trim().length > 0) {
                navigate(`/products/${encodeURIComponent(category)}?text=${text}`);
            }
            else {
                navigate(`/products/${encodeURIComponent(category)}`);
            } 
        }

        setText("");
    }

    return (
        <form className={styles.searcher_div} onSubmit={onSearch}>
            <div className={styles.searcher_input}>
                <SearcherText text={text} setText={setText} />
                <SearcherDropdown setCategory={setCategory} />
            </div>
            <SearcherButton />
        </form>
    )
}

export default Searcher;
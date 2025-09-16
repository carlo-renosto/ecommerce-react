import styles from './SearcherDropdown.module.scss'

const categories = [
    { label: 'Todas', id: 'all' },
    { label: 'Electrónica', id: "electronics" },
    { label: 'Joyas', id: "jewelery" },
    { label: 'Ropa Masculina', id: "men's%20clothing" },
    { label: 'Ropa Femenina', id: "women's%20clothing" }
];

const SearcherDropdown = ({ setCategory }) => {
    const onChangeHandler = (event) => {
        setCategory(event.target.value)
    }

    return (
        <select className={styles.searcherdropdown} onChange={onChangeHandler}>
            {categories.map((cat) => 
                <option key={cat.id} value={cat.id}>{cat.label}</option>
            )}
        </select>
    )
}

export default SearcherDropdown;
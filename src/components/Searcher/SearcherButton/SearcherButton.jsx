import styles from './SearcherButton.module.scss'

const SearcherButton = () => {
    return (
        <button className={styles.searcherbutton} type="submit">
            <span className="material-symbols-outlined">
                search
            </span>
        </button>
    )
}

export default SearcherButton;
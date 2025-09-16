import styles from './SearcherText.module.scss'

const SearcherText = ({ text, setText }) => {
    const onChangeHandler = (event) => {
        setText(event.target.value)
    }

    return (
        <input className={styles.searchertext} type="text" value={text} onChange={onChangeHandler} />
    )
}

export default SearcherText;
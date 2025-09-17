import { Link } from "react-router-dom";
import styles from './PageNotFound.module.scss'

const PageNotFound = () => {
    return (
        <div className={styles.pagenotfound_div}>
            <h1>Página no encontrada (404)</h1>
            <Link to="/">Volver al inicio</Link>
        </div>
    )
}
  
export default PageNotFound;
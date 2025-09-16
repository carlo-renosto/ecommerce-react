import styles from './NavBar.module.scss'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCategoriesAsync } from '../../utils/mock'
import CartWidget from '../CartWidget/CartWidget'
import Searcher from '../Searcher/Searcher'

const Navbar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategoriesAsync().then((categories) => {
      setCategories(categories)
    })
  }, [])

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div className={styles.navbar_searcher}>
        <Searcher />
      </div>
      <CartWidget/>
    </div>
  )
}

export default Navbar;

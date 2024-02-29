import styles from './NavBar.module.scss'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCategoriesAsync } from '../../utils/mock'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategoriesAsync().then((categories) => {
      setCategories(categories)
    })
  }, [])

  return (
    <div className={styles.navbar}>
      <Link to='/'>
        <Logo />
      </Link>
      <div className={styles.links}>
        <Link to='/products' className={styles.link_decoration}>All products</Link>
        {categories.map((category, index) => (
          <Link to={`/products/${category}`} key={index} className={`${styles.link} ${styles.link_decoration}`}>{category}</Link>
        ))}
      </div>
      <CartWidget/>
    </div>
  )
}

export default Navbar

import logo from "../../assets/ecommercelogo.webp"
import logoMobile from "../../assets/ecommercelogomobile.webp"
import styles from "./Logo.module.scss"

const Logo = () => {
   return (
      <picture>
         <source className={styles.logo} srcSet={logoMobile} media="(max-width: 767px)"/>
         <source className={styles.logo} srcSet={logo} media="(min-width: 768px)"/>
         <img className={styles.logo} src={logo} alt="logo" />
      </picture>
   )
}

export default Logo;
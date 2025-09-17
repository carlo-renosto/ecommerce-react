import { useState } from "react"
import styles from './ThemeSwitch.module.scss'

const ThemeSwitch = () => {
    const [theme, setTheme] = useState(document.documentElement.getAttribute("data-theme"));

    const switchTheme = () => {
        const html = document.documentElement;
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        html.setAttribute("data-theme", newTheme);
    };

    return (
        <button className={styles.themeswitch} onClick={switchTheme}>
            <span className="material-symbols-outlined">
                light_mode
            </span>
        </button>
    )
}

export default ThemeSwitch;

import CartWidget from "../CartWidget/CartWidget";

function NavBar() { 
    return (
        <>
            <div id="nav-bar">
                <a href="/">
                    <img id="nav-logo" src="ecommercelogo.png" alt="Logo"></img>
                </a>
                <a href="/" className="list">Categorías</a>
                <a href="/" className="list">Ofertas</a>
                <a href="/" className="list">Configuración</a>
                <CartWidget/>
            </div>
        </> 
    )
}

export default NavBar;
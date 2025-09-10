// App deploy: https://ecommerce-react-five-gamma.vercel.app

import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './routing/context/CartContext'
import Home from './pages/Home/Home'
import Navbar from "./components/NavBar/NavBar"
import PageNotFound from './components/PageNotFound/PageNotFound'
import Products from './pages/Products/Products'
import ProductById from './pages/Products/ProductById/ProductById'
import ProductByCategory from './pages/Products/ProductByCategory/ProductByCategory'
import Cart from './pages/Cart/Cart'
import CartCheckout from './pages/Cart/CartCheckout/CartCheckout'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:cid" element={<ProductByCategory/>}/>
          <Route path="/product/:pid" element={<ProductById/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/cart/checkout-form" element={<CartCheckout/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;

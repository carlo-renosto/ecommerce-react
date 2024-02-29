// App deploy: https://ecommerce-react-five-gamma.vercel.app/products

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './routing/context/CartContext'
import Home from './pages/Home/Home'
import Navbar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer'
import CartCheckoutForm from './components/CartCheckoutForm/CartCheckoutForm'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<ItemListContainer/>}/>
          <Route path="/products/:cid" element={<ItemListContainer/>}/>
          <Route path="/product/:pid" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartContainer/>}/>
          <Route path="/cart/checkout-form" element={<CartCheckoutForm/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;

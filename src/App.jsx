import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greetings={"Bienvenido/a usuario/a"}/>
    </>
  )
}

export default App

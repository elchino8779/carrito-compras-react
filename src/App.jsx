import './App.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage/HomePage'
import Gadgets from './pages/Gadgets/Gadgets'
import Jewerely from './pages/Jewerely/Jewerely'
import Men from './pages/Men/Men'
import Woman from './pages/Woman/Woman'
import ModalCard from './components/ModalCard/ModalCard'
import Cart from './pages/Cart/Cart'
import { CartContextProvider } from './context/CartContext'
import { VisibilityContextProvider } from './context/VisibilityModalContext'

function App() {

  return (
    <CartContextProvider>
      <VisibilityContextProvider>
        <HashRouter>
          <NavBar />
          <ModalCard />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/gadgets' element={<Gadgets />} />
            <Route path='/jewerely' element={<Jewerely />} />
            <Route path='/men' element={<Men />} />
            <Route path='/woman' element={<Woman />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </HashRouter>
      </VisibilityContextProvider>
    </CartContextProvider>
  )
}

export default App

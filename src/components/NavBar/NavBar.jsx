import { NavLink } from 'react-router-dom'
import './NavBar.scss'
import homeIcon from '/home.svg'
import devicesIcon from '/devices.svg'
import jeweleryIcon from '/jewelery.svg'
import menIcon from '/man.svg'
import womanIcon from '/woman.svg'
import shoppingBagIcon from '/shoppingBag.svg'
import shoppingBagExclamationIcon from '/shoppingBagExclamation.svg'
import { useCartContext } from '../../context/CartContext'


const NavBar = () => {

  const cartContext = useCartContext();
  const { cart } = cartContext;


  return (
    <nav className='nav-bar'>
      <NavLink to={"/"} className='link-nav' >
        <p>Home</p>
        <img className='icon-nav' src={homeIcon} alt="Home" />
      </NavLink>

      <NavLink to={'/gadgets'} className='link-nav'>
        <p>Gadgets</p>
        <img className='icon-nav' src={devicesIcon} alt="Gadgets" />
      </NavLink>

      <NavLink to={'/jewerely'} className='link-nav'>
        <p>Jewelery</p>
        <img className='icon-nav' src={jeweleryIcon} alt="Jewelery" />
      </NavLink>

      <NavLink to={'/men'} className='link-nav'>
        <p>Men</p>
        <img className='icon-nav' src={menIcon} alt="Men" />
      </NavLink>

      <NavLink to={'/woman'} className='link-nav'>
        <p>Woman</p>
        <img className='icon-nav' src={womanIcon} alt="Woman" />
      </NavLink>

      <NavLink to={'/cart'} className='link-nav'>
        <p>Cart</p>
        <img className='icon-nav' src={cart.length > 0 ? shoppingBagExclamationIcon : shoppingBagIcon} alt="Cart" />
      </NavLink>
    </nav>
  )
}

export default NavBar
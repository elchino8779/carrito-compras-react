import './Cart.scss'
import Title from '../../components/Title/Title.jsx';
import { useCartContext } from '../../context/CartContext.jsx';
import CardCart from '../../components/CardCart/CardCart.jsx';
import shoppingBagAddIcon from '/shoppingBagAdd.svg'
import TotalCart from '../../components/TotalCart/TotalCart.jsx';

const Cart = () => {

  const cartContext = useCartContext();
  const { cart } = cartContext

  return (
    <div className='cart-page'>
      <Title leyend="The place of pain..." />
      <div className='cart-cards-container'>
        {cart.length > 0
          ? cart.map(el => <CardCart key={el.product_id} el={el} />)
          : <h2>
            <img src={shoppingBagAddIcon} alt="ShoppingBagIcon" />
            Add a product first
          </h2>}
          {cart.length > 0 && <TotalCart />}
      </div>
    </div>
  )
}

export default Cart
import './TotalCart.scss'
import { useCartContext } from '../../context/CartContext'

const TotalCart = () => {

  const cartContext = useCartContext();
  const { total } = cartContext;

  return (
    <div className='total-container'>
      <h2>{`Total: $${total}`}</h2>
      <button>Go!</button>
    </div>
  )
}

export default TotalCart
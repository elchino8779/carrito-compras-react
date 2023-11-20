import { useEffect } from 'react'
import './CardCart.scss'
import sum from '/sum.svg'
import rest from '/rest.svg'
import close from '/close.svg'
import { useCartContext } from '../../context/CartContext'

const CardCart = ({ el }) => {

  const cartContext = useCartContext();
  const { addAmountProduct, delAmountProduct, deleteItemCart } = cartContext;

  const { amount, img_url, price, product_id, trademark } = el

  useEffect(() => {
    console.log(el)
  }, [el])

  return (
    <div className='card-cart'>
      <button className='delete-item-cart' onClick={(e) => deleteItemCart(product_id)}>
        <img src={close} alt={close} />
      </button>
      <div className='img-trademark-price'>
        <div className='img-cart-container'>
          <img src={img_url} alt={trademark} />
        </div>
        <h4>{trademark}</h4>
        <h5>{`$${price} USD`}</h5>
      </div>
      <div className='amount-subtotal'>
        <div className='amount-cart'>
          <p>Units</p>
          <img src={rest} alt="Del" onClick={() => delAmountProduct(product_id)} />
          <input type="number" name="amountCart" value={amount} disabled />
          <img src={sum} alt="Add" onClick={() => addAmountProduct(product_id)} />
        </div>
        <div className='subtotal'>
          <h3>Sub:</h3>
          <h3>{`$${price * amount}`}</h3>
        </div>
      </div>
    </div>
  )
}

export default CardCart
import { useState } from 'react'
import './ModalCard.scss'
import rest from '/rest.svg'
import sum from '/sum.svg'
import shoppinBagAdd from '/shoppingBagAdd.svg'
import close from '/close.svg'
import useVisibilityContext from '../../context/VisibilityModalContext'
import { useCartContext } from '../../context/CartContext'

const ModalCard = () => {

  const data = useVisibilityContext()
  const { visibilityModal, contentModal, handleDeleteContentModal } = data
  const cartContext = useCartContext()
  const { handleCart } = cartContext
  const [amount, setAmount] = useState(1)

  const handleSum = () => { amount <= 19 ? setAmount(amount + 1) : setAmount(amount) }

  const handleRest = () => { amount >= 2 ? setAmount(amount - 1) : setAmount(amount) }

  const handleClose = (e) => {
    handleDeleteContentModal();
    setAmount(1);
  }

  const handleAddCart = () => {
    handleClose()
    handleCart({ contentModal, amount })
  }

  return (
    <>
      {visibilityModal &&
        <div className='modal-container'>
          <div className='modal-card-container'>
            <button className='close-modal' onClick={(e) => handleClose(e)}>
              <img src={close} alt={close} />
            </button>
            <div className="container-img-title">
              <h2>{contentModal.trademark}</h2>
              <img src={contentModal.img_url} alt={contentModal.trademark} />
            </div>
            <div className="container-description">
              <h3>{contentModal.description}</h3>
              <p>{`$ ${contentModal.price} USD`}</p>
              <div className="container-amount-button">
                <div className="container-amount">
                  <img src={rest} alt="rest" onClick={handleRest} />
                  <input type="number" name="amount" value={amount} min="1" max="5" disabled onChange={(e) => setAmount(e.target.value)} />
                  <img src={sum} alt="sum" onClick={handleSum} />
                </div>
                <button onClick={handleAddCart}>
                  <img src={shoppinBagAdd} alt="Add To Cart" />
                </button>
              </div>
            </div>
          </div>
        </div>}
    </>
  )
}

export default ModalCard
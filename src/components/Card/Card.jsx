import './Card.scss'
import useVisibilityContext from '../../context/VisibilityModalContext';


const Card = ({ el }) => {

  const data = useVisibilityContext()
  const { handleContentModal } = data
  const { trademark, description, img_url } = el;

  return (
    <>
      <div className='card-container'>
        <img className='img-card' src={img_url} alt={trademark} />
        <h2 className='title-card'>{trademark}</h2>
        <p className='description-card'>{description}</p>
        <button className='button-card' onClick={() => handleContentModal(el)}>see more...</button>
      </div>
    </>
  )
}

export default Card
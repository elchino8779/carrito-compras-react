import './Jewerely.scss'
import Title from '../../components/Title/Title'
import CardsContainer from '../../components/CardsContainer/CardsContainer'
import { Products } from '../../assets/Products'

const Jewerely = () => {

  const {jewelery} = Products;

  return (
    <div className='jewelery-page'>
      <Title leyend="Look better and more elegant with our products..." />
      <CardsContainer products={jewelery}/>
    </div>
  )
}

export default Jewerely
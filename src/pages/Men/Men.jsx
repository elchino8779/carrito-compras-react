import './Men.scss'
import Title from '../../components/Title/Title'
import CardsContainer from '../../components/CardsContainer/CardsContainer'
import { Products } from '../../assets/Products'

const Men = () => {

  const {men} = Products;

  return (
    <div className='men-page'>
    <Title leyend="Men's fashion does not go unnoticed..." />
    <CardsContainer products={men}/>
  </div>
  )
}

export default Men
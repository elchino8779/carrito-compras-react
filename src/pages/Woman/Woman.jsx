import './Woman.scss'
import Title from '../../components/Title/Title'
import CardsContainer from '../../components/CardsContainer/CardsContainer'
import { Products } from '../../assets/Products'

const Woman = () => {

  const { woman } = Products;

  return (
    <div className='woman-page'>
      <Title leyend="Make your everyday life a fashion show..." />
      <CardsContainer products={woman} />
    </div>
  )
}

export default Woman
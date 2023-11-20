import './Gadgets.scss'
import Title from '../../components/Title/Title.jsx';
import CardsContainer from '../../components/CardsContainer/CardsContainer.jsx';
import { Products } from '../../assets/Products.jsx';

const Gadgets = () => {

  const {gadgets} = Products;

  return (
    <div className='gadgets-page'>
      <Title leyend="We know what you want, don't be left out..." />
      <CardsContainer products={gadgets} />
    </div>
  )
}

export default Gadgets
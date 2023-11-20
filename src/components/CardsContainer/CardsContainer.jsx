import './CardsContainer.scss'
import Card from '../../components/Card/Card';

const CardsContainer = ({ products }) => {

  return (
    <section className='cards-container'>
      {products.map(el => <Card key={el.product_id} el={el} />)}
    </section>
  )
}

export default CardsContainer
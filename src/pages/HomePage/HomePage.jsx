import './HomePage.scss'
import Title from '../../components/Title/Title'
import Article from '../../components/Article/Article'
import { texts } from '../../assets/Texts'

const { gadgets, jewelery, men, woman } = texts;

const HomePage = () => {
  return (
    <div className='home-page'>
      <Title leyend='Join the new world fashion...'/>
      <Article title={gadgets.title} content={gadgets.content} slider_img={gadgets.slider_img} link={"gadgets"}/>
      <Article title={jewelery.title} content={jewelery.content} slider_img={jewelery.slider_img} link={"/jewerely"} left={true}/>
      <Article title={men.title} content={men.content} slider_img={men.slider_img} link={"/men"}/>
      <Article title={woman.title} content={woman.content} slider_img={woman.slider_img} link={"/woman"} left={true}/>
    </div>
  )
}

export default HomePage
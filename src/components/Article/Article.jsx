import './Article.scss'
import Slider from '../Slider/Slider'
import { NavLink } from 'react-router-dom'

const Article = ({ title, content, slider_img, link, left }) => {
  return (
    <article className={left ? 'article left-invert' : 'article'}>
      <div className='texts'>
        <h2>{title}</h2>
        <h3>{content}</h3>
        <NavLink to={link} className='link-article'>
          <p>see more...</p>
        </NavLink>
      </div>
      <div className="img-content">
        <Slider slider_img={slider_img} />
      </div>
    </article>
  )
}

export default Article
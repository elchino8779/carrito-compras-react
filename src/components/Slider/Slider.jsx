import { useEffect, useState } from 'react'
import './Slider.scss'

const Slider = ({ slider_img }) => {

  const [imagen, setImagen] = useState(slider_img[0]);
  const [indexImg, setindexImg] = useState(1)

  useEffect(() => {

    setTimeout(() => {

      if (indexImg < slider_img.length) {
        setImagen(slider_img[indexImg]);
        setindexImg(indexImg + 1);
      }
      else{
        setImagen(slider_img[0]);
        setindexImg(1);
      }

    }, 3000);

  }, [indexImg])

  useEffect(() => {

    

  }, [imagen])

  return (
    <div className='slider-container'>
      <img className='slider-img' src={imagen} alt="SliderImg" />
    </div>
  )
}

export default Slider
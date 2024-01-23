import './Banner.css';
import banner from '../../images/fundo-pizza.jpg'

const Banner = () => {
  return (
     <div className='banner'><img src={banner} alt="Foto Banner" /></div>
  )
}

export default Banner
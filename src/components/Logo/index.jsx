import './Logo.css';
import logo from '../../images/logo.png'
const Logo = () => {
  return (
    <div className='logo'>
        <img src={logo} alt="Logo Pizzaria"/>
      </div>
  )
}

export default Logo
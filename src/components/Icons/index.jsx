import { FaFacebook, FaInstagram, FaWhatsappSquare } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import './Icons.css';

const Icons = () => {

  const socialIcons = [FaInstagram, FaFacebook, FaWhatsappSquare, IoIosCall];

  return (
    <nav className="icons">
        <ul>
          {socialIcons.map((Item) => <li key={Item}><Item/></li>)}
        </ul>
      </nav>
  )
}

export default Icons
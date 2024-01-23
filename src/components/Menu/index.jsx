import './Menu.css';
import Logo from '../Logo';
import MenuItems from '../MenuItems';
import Icons from '../Icons';
import Title from '../Title';


const Menu = () => {
  return (
    <>
    <header className="menu">
      <Logo/>
      <MenuItems/>
      <Icons/>
    </header>
    <Title text='COMPRE ONLINE AQUI!'/>
    </>
  )
}

export default Menu
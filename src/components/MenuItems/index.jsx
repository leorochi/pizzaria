import './MenuItems.css'

const MenuItems = () => {

const itemsMenu = ['HORÁRIOS', 'PROMOÇÕES', 'MENU', 'LOCALIZAÇÃO', 'CONTATO', 'COMPRE ONLINE'];

  return (
    <nav className="items-menu">
        <ul>
          {itemsMenu.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </nav>
  )
}

export default MenuItems
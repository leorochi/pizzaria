import Menu from "./components/menu";
import './App.css'
import SobreNos from "./components/SobreNos";
import Banner from "./components/Banner/Banner";
import Localizacao from "./components/Localização/Localizacao";
import Horario from "./components/Horario";
import Promocao from "./components/Promoções";
import Valor from "./components/TabelaValores";
import Pizza from "./components/Pizzas/Pizza";

function App() {
  

  return (
    <>
     <Menu/>
     <Banner/>
     <SobreNos/>
     <Localizacao/>
     <Horario/>
     <Promocao/>
     <Valor/>
     <Pizza/>
    </>
  )
}

export default App

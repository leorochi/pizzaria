import Menu from "./components/menu";
import './App.css'
import SobreNos from "./components/SobreNos";
import Banner from "./components/Banner/Banner";
import Localizacao from "./components/Localização/Localizacao";
import Horario from "./components/Horario";

function App() {
  

  return (
    <>
     <Menu/>
     <Banner/>
     <SobreNos/>
     <Localizacao/>
     <Horario/>
    </>
  )
}

export default App

import Valor from "../TabelaValores";
import Tamanho from "../Tamanhos";
import PizzaCategoria from "./PizzaCategoria";
import valores from '../../images/valores.png';


const saboresTradicionais = {
  PT1: {
    '4 QUEIJOS': 'Provolone, Parmesão, Requeijão e Mussarela',
    'ALHO E ÓLEO': 'Alho e óleo, mussarela e molho de tomate especial',
    'BRÓCOLIS COM REQUEIJÃO': 'Brócolis, requeijão cremoso, mussarela e molho de tomate especial',
    'CALABRESA': 'Calabresa, mussarela e molho de tomate especial',
    'CHESTER COM REQUEIJÃO': 'Chester, requeijão cremoso, mussarela e molho de tomate especial',
    'JARDINEIRA': 'Lombo, tomate, cebola, pimentão, ovo, mussarela e molho de tomate especial',
    'LOMBO COM REQUEIJÃO': 'Lombo, requeijão cremoso, mussarela e molho de tomate especial',
    'MAFIOSA': 'Calabresa, berinjela, pimenta, mussarela e molho de tomate especial'
  },
  PT2: {
    'MARGUERITA': 'Tomate, manjericão, mussarela e molho de tomate especial',
    'MUSSARELA': 'Mussarela e molho de tomate especial',
    'PORTUGUESA': 'Presunto, cebola, ovo, tempero verde, mussarela e molho de tomate especial',
    'QUALQUER UM': 'Chester, brócolis, requeijão cremoso, mussarela e molho de tomate especial',
    'SICILIANA': 'Calabresa, cebola, mussarela e molho de tomate especial',
    'VEGETARIANA': 'Champignon, milho verde, cebola e tomate, mussarela e molho de tomate especial'
  }
};

const saboresEspeciais = {
  PE1: {
    'AMERICA': 'Frango, bacon e requeijão cremoso',
    'BACON': 'Bacon, mussarela e molho de tomate especial',
    'BASCA': 'Presunto, bacon, requeijão cremoso, mussarela e molho de tomate especial',
    'CAIPIRA': 'Frango, milho verde, requeijão cremoso, mussarela e molho de tomate especial',
    'CALABRESA ESPECIAL': 'Calabresa, cebola caramelizada e gorgonzola',
    'CARBONARA': 'Mussarela, bacon, ovo, parmesão, e o melhor: a base é de molho branco!',
    'CEBOLA CARAMELIZADA COM GORGONZOLA': 'Cebola caramelizada, gorgonzola, mussarela e molho de tomate especial',
    'CORAÇÃO': 'Coração, mussarela e molho de tomate especial',
    '4 QUEIJOS COM BACON': 'Provolone, parmesão, requeijão, mussarela e cubinhos de bacon, com molho de tomate especial',
    '5 QUEIJOS': 'Gorgonzola, provolone, parmesão, requeijão, mussarela e molho de tomate especial',
    '6 QUEIJOS': 'Gorgonzola, provolone, parmesão, requeijão, cheddar, mussarela e molho de tomate especial'
  },
  PE2: {
    'CORN & BACON': 'Milho verde, bacon, mussarela e molho de tomate especial',
    'EL FUEGO': 'Calabresa, pimentão, pimenta, mussarela e molho de tomate especial',
    'FRANGO COM REQUEIJÃO': 'Frango, requeijão cremoso, mussarela e molho de tomate especial',
    'FURIOSA': 'Calabresa, pimentão, champignon, bacon, berinjela marinada, mussarela e molho de tomate especial',
    'GAYA': 'Presunto, champignon, gorgonzola, mussarela e molho de tomate especial',
    'HAVAIANA COM LOMBO': 'Lombo, abacaxi, mussarela e molho de tomate especial',
    'O BARÃO': 'Calabresa, bacon, pimentão, azeitona, cebola, mussarela e molho de tomate especial',
    'PICANHA COM PROVOLONE': 'Tiras de picanha de gado assadas com sal grosso e coberta com queijo provolone',
    'PEPPERONI COM CHEDDAR': 'Pepperoni, cheddar cremoso, muita mussarela e molho de tomate especial',
    'PESTO DE MANJERICÃO': 'Pasta de manjericão, parmesão, nozes, mussarela e molho de tomate especial',
    'TOSCANA': 'Calabresa, champignon, tomate, manjericão, mussarela e molho de tomate especial',
    'ROMANA': 'Chester, requeijão cremoso, nozes, mussarela e molho de tomate especial'
  }
};

const saboresPremium = {
  PP1: {
    'ISCAS DE CARNE AO ALHO': 'Iscas de carne, alho e óleo, mussarela e molho de tomate especial',
    'ISCAS DE CARNE COM PALHA': 'Iscas de carne, batata palha, mussarela e molho de tomate especial',
    'ISCAS DE CARNE COM CHEDDAR': 'Iscas de carne, cheddar cremoso, mussarela e molho de tomate especial',
    'CARNE DE PANELA COM SWEET CHILLI': 'Deliciosa carne de gado desfiada feita em casa com molho Agridoce Picante',
    'CARNE DE PANELA COM BARBECUE': 'Deliciosa carne de gado desfiada feita em casa com molho Barbecue'
  },

  PP2: {
    'CARNE DE PANELA COM REQUEIJÃO': 'Deliciosa carne de gado desfiada feita em casa com Requeijão',
    'DA VELHA': 'Champignon, gorgonzola, mussarela e molho de tomate especia',
    'STROGONOFF': 'Strogonoff de carne, mussarela e molho de tomate especial',
    'TOMATE SECO COM RÚCULA': 'Tomate seco, rúcula, mussarela e molho de tomate especial',
    '@COMIDABOANATELE': 'Sabor especial dos nossos campeões! Provolone, pesto, tomate seco, requeijão e manjericão!'
  }
}

const saboresDoces = {
  PD1: {
    'ALEGRIA COM CHOCOLATE BRANCO': 'Chocolate branco, confeitos coloridos e mussarela',
    'ALEGRIA COM CHOCOLATE PRETO': 'Chocolate preto, confeitos coloridos e mussarela',
    'BRANCA DE NEVE': 'Chocolate branco, chocolate preto, morangos e mussarela',
  },

  PD2: {
    'CHOCOLATE BRANCO + CHOCOLATE PRETO': 'Chocolate Preto,chocolate branco e mussarela',
    'VIA LÁCTEA': 'Chocolate branco, nozes e mussarela'
  }

}

const Pizza = () => {
  return (
    <section>
      <Valor 
     titulo='SABORES TRADICIONAIS'
     precoSuperFamilia='R$ 116,00' 
     precoFamilia='R$ 99,00' 
     precoGrande='R$ 84,00' 
     precoMedia='R$ 66,00' 
     precoPequena='R$ 49,00'
     valores={valores}/>
      <PizzaCategoria 
      title='PIZZAS TRADICIONAIS' 
      sabores={saboresTradicionais.PT1} 
      saboresP2={saboresTradicionais.PT2}/>
      <Tamanho/>
      <PizzaCategoria 
      title='PIZZAS ESPECIAIS' 
      sabores={saboresEspeciais.PE1} 
      saboresP2={saboresEspeciais.PE2}/>
      <Tamanho/>
      <PizzaCategoria 
      title='PIZZAS PREMIUM' 
      sabores={saboresPremium.PP1} 
      saboresP2={saboresPremium.PP2}/>
      <Tamanho/>
      <PizzaCategoria 
      title='PIZZAS DOCES' 
      sabores={saboresDoces.PD1} 
      saboresP2={saboresDoces.PD2}/>
      <Valor 
     titulo='SABORES DOCES'
     precoSuperFamilia='R$ 133,00' 
     precoFamilia='R$ 116,00' 
     precoGrande='R$ 102,00' 
     precoMedia='R$ 75,00' 
     precoPequena='R$ 58,00'
     textoDoce='Pizzas super família, família e grande até 4 sabores – Pizzas média e pizza pequena até 2 sabores'/>
    </section>
  )
}

export default Pizza
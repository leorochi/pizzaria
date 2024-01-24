import './Valor.css';
import valores from '../../images/valores.png';

const Valor = () => {
  return (
    <section className='price'>
      <h1>VALORES BASE DAS PIZZAS - SABORES TRADICIONAIS</h1>
      <h2>SUPER FAMÍLIA: (45CM) R$ 116,00&nbsp; &nbsp; &nbsp; &nbsp; FAMÍLIA: (40CM) R$ 99,00</h2>
      <h2>GRANDE: (35CM) R$ 84,00&nbsp; &nbsp; &nbsp; &nbsp; MÉDIA: (30CM)   R$ 66,00</h2>
      <h2>PEQUENA: (25CM) R$ 49,00</h2>
      <img src={valores} alt="Tabela Valores" />
    </section>
  )
}

export default Valor

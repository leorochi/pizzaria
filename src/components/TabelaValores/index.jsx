/* eslint-disable react/prop-types */
import './Valor.css';

const Valor = ({titulo, precoSuperFamilia, precoFamilia, precoGrande, precoMedia, precoPequena, textoDoce, valores}) => {


  return (
    <section className='price'>
      <h1>VALORES BASE DAS PIZZAS - {titulo}</h1>
      <h2>SUPER FAMÍLIA: (45CM) {precoSuperFamilia}&nbsp; &nbsp; &nbsp; &nbsp; FAMÍLIA: (40CM) {precoFamilia}</h2>
      <h2>GRANDE: (35CM) {precoGrande}&nbsp; &nbsp; &nbsp; &nbsp; MÉDIA: (30CM)   {precoMedia}</h2>
      <h2>PEQUENA: (25CM) {precoPequena}</h2>
      {valores && <img src={valores} alt='Foto Valores'></img>}
      <p>{textoDoce}</p>
    </section>
  )
}

export default Valor

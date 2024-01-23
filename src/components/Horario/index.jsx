import './Horario.css';

const Horario = () => {

const horarios = {
    'DOM PEDRO II': '11H ÀS 14H, 18 ÀS 23H',
    'CARLOS BARBOSA': '18H ÀS 23H',
    'PROTÁSIO ALVES': '18H ÀS 23H',
    'VIAMÃO': '18H ÀS 23H',
    'ALVORADA': '18H ÀS 23H',
}

  return (
      <section className='content'>
        <h1>HORÁRIO DE FUNCIONAMENTO</h1>
        <span>Segunda à Domingo</span>
        <ul>
          {Object.entries(horarios).map(([local, horario]) => <li key={local}>{local}: {horario}</li>)}
        </ul>
      </section>
     
  )
}

export default Horario
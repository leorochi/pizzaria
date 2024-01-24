import './PizzaTradicional.css';

const PizzaTradicional = () => {

  const sabores = {
    '4 QUEIJOS': 'Provolone, Parmesão, Requeijão e Mussarela',
    'ALHO E ÓLEO': 'Alho e óleo, mussarela e molho de tomate especial',
    'BRÓCOLIS COM REQUEIJÃO': 'Brócolis, requeijão cremoso, mussarela e molho de tomate especial',
    'CALABRESA': 'Calabresa, mussarela e molho de tomate especial',
    'CHESTER COM REQUEIJÃO': 'Chester, requeijão cremoso, mussarela e molho de tomate especial',
    'JARDINEIRA': 'Lombo, tomate, cebola, pimentão, ovo, mussarela e molho de tomate especial',
    'LOMBO COM REQUEIJÃO': 'Lombo, requeijão cremoso, mussarela e molho de tomate especia',
    'MAFIOSA': 'Calabresa, berinjela, pimenta, mussarela e molho de tomate especial'
  }

  const saboresP2 = {
    'MARGUERITA': 'Tomate, manjericão, mussarela e molho de tomate especial',
    'MUSSARELA': 'Mussarela e molho de tomate especial',
    'PORTUGUESA': 'Presunto, cebola, ovo, tempero verde, mussarela e molho de tomate especial',
    'QUALQUER UM': 'Chester, brócolis, requeijão cremoso, mussarela e molho de tomate especial',
    'SICILIANA': 'Calabresa, cebola, mussarela e molho de tomate especia',
    'VEGETARIANA': 'Champignon, milho verde, cebola e tomate, mussarela e molho de tomate especial'
  }

  return (
    <main className='container-pizzas'>
      <div className="title">
        <h1>PIZZAS TRADICIONAIS</h1>
        <div className='border-pizza'></div>
      </div>
      <section className='sabores'>
        <section className='saboresp1'>
          {Object.entries(sabores).map(([sabor, descricao]) =>
            <>
            <h2 key={sabor}>{sabor}</h2>
            <div className='linha-pontilhada'>
              <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
            </div>
            <p key={descricao}>{descricao}</p>
            </>
          )}
        </section>
        <section className='saboresp2'>
            {Object.entries(saboresP2).map(([sabor, descricao]) =>
            <>
            <h2 key={sabor}>{sabor}</h2>
            <div className='linha-pontilhada'>
            <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
            </div>
            <p key={descricao}>{descricao}</p>
            </>
            )}
        </section>
      </section>
    </main>
  )
}

export default PizzaTradicional
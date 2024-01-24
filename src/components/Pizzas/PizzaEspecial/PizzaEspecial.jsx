import Tamanho from '../../Tamanhos';
import './PizzaEspecial.css';

const sabores = {
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
}

const saboresP2 = {
  'CORN & BACON': 'Milho verde, bacon, mussarela e molho de tomate especia',
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

const PizzaEspecial = () => {
  return (
    <main className='container-pizzas'>
      <div className="title">
        <h1>PIZZAS ESPECIAIS</h1>
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
      <Tamanho/>
    </main>
  )
}

export default PizzaEspecial
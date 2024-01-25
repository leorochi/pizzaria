/* eslint-disable react/prop-types */
import './PizzaCategoria.css';


const PizzaCategoria = ({title, sabores, saboresP2}) => {
  return (
    <main className='container-pizzas'>
      <div className="title">
        <h1>{title}</h1>
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

export default PizzaCategoria
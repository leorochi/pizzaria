import PizzaEspecial from './PizzaEspecial/PizzaEspecial'
import PizzaTradicional from './PizzaTradicional'

const Pizza = () => {
  return (
    <section>
      <PizzaTradicional/>
      <PizzaEspecial/>
    </section>
  )
}

export default Pizza
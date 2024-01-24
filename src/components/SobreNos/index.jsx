import './SobreNos.css';
import TextoSobreNos from '../TextoSobreNos';
import ImagemSobreNos from '../ImagemSobreNos';

const SobreNos = () => {
  return (
    <main className='container'> 
    <section className="text-image">
      <TextoSobreNos/>
      <ImagemSobreNos/>
    </section>
    </main>   
  )
}

export default SobreNos
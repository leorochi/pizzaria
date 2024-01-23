import './SobreNos.css';
import TextoSobreNos from '../TextoSobreNos';
import ImagemSobreNos from '../ImagemSobreNos';

const SobreNos = () => {
  return (
    <div className='container'> 
    <section className="text-image">
      <TextoSobreNos/>
      <ImagemSobreNos/>
    </section>
    </div>   
  )
}

export default SobreNos
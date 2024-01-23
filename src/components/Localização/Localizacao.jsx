import './Localizacao.css';
import MapLink from './MapLink';

const Localizacao = () => {
  return (
    <main className='container-loc'>
        <section className='localizacao'>
          <h1>LOCALIZAÇÃO</h1>
          <h2>PORTO ALEGRE</h2>
          <p>Av. Protásio Alves, 6639 - Bairro Jardim Itu-Sabará - <MapLink address='Av. Protásio Alves, 6639 - Bairro Jardim Itu-Sabará'/></p>
          <p>R. Dom Pedro II, 134 - Bairro São João - <MapLink address='R. Dom Pedro II, 134 - Bairro São João'/></p>
          <p>Av. Dr. Carlos Barbosa, 1157 - Bairro Azenha - <MapLink address='Av. Dr. Carlos Barbosa, 1157 - Bairro Azenha'/></p>
          <h2>VIAMÃO</h2>
          <p>Av. Sen. Salgado Filho, 9908 - Bairro Centro - <MapLink address='Av. Sen. Salgado Filho, 9908 - Bairro Centro'/></p>
          <h2>ALVORADA</h2>
          <p>Av. Pres. Getúlio Vargas, 368 loja 11, Bairro Bela Vista - <MapLink address='Av. Pres. Getúlio Vargas, 368 loja 11, Bairro Bela Vista'/></p>
        </section>
        <section className='pedido'>
          <h1>COMO PEDIR</h1>
          <h2><a href="#">LOJA VIRTUAL</a></h2>
          <p>Você pode comprar diretamente da nossa loja virtual <a href="#">clicando aqui</a> !</p>
          <h2><a href="#">TELEFONE</a></h2>
          <p>Você pode fazer um pedido ligando para nosso Call-Center em 51 3387 - 1000 !</p>
          <h2>IFOOD</h2>
          <p>Você também pode acessar uma de nossas lojas virtuais no iFood!</p>
        </section>
    </main>
  )
}

export default Localizacao
import Header from './componentes/Header'
import Hero from './componentes/Hero';
import Sobre from './componentes/Sobre';
import Funcionalidades from './componentes/Funcionalidades';
import SecaoDepoimentos from './componentes/Depoimentos';
import Footer from './componentes/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Sobre />
      <Funcionalidades />
      <SecaoDepoimentos />
      <Footer />
    </div>
  );
}

export default App;

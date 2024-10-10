import React, { useRef } from 'react';
import Contato from './componentes/Contato';
import Header from './componentes/Header';
import Hero from './componentes/Hero';
import Sobre from './componentes/Sobre';
import Funcionalidades from './componentes/Funcionalidades';
import SecaoDepoimentos from './componentes/Depoimentos';
import Footer from './componentes/Footer';
import Receitas from './componentes/Receitas';

function App() {
  const refs = {
    sobre: useRef(null),
    funcionalidades: useRef(null),
    receitas: useRef(null),
    depoimentos: useRef(null),
    contato: useRef(null),
  };

  return (
    <div className="App">
      <Header 
        sobreRef={refs.sobre} 
        funcionalidadesRef={refs.funcionalidades} 
        depoimentosRef={refs.depoimentos} 
        contatoRef={refs.contato}
      />
      <Hero />
      <div ref={refs.sobre}><Sobre /></div>
      <div ref={refs.funcionalidades}><Funcionalidades /></div>
      <div ref={refs.receitas}><Receitas /></div>
      <div ref={refs.depoimentos}><SecaoDepoimentos /></div>
      <div ref={refs.contato}><Contato /></div>
      <Footer 
        sobreRef={refs.sobre} 
        funcionalidadesRef={refs.funcionalidades} 
        receitasRef={refs.receitas} 
        depoimentosRef={refs.depoimentos} 
        newsletterRef={refs.contato}
      />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Intervalo from './componentes/Intervalo'
import Soma from './componentes/Soma'
import Media from './componentes/Media'
import Sorteio from './componentes/Sorteio'

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux</h1>
      <div className="linha"> 
      <Intervalo></Intervalo>
      </div>
      <div className="linha"> 
      <Soma title="Card 2" blue></Soma>
      <Media title="Card 3" green></Media>
      <Sorteio title="Card 4" purple></Sorteio>
      </div>
      
    </div>
  );
}

export default App;

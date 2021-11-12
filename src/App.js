import './App.css';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import AdicionarJogador from './components/AdicionarJogador/AdicionarJogador'
import Jogadores from './components/Jogadores/Jogadores'

function App() {
  return (
    <Router>
       <div className="App">
         <header>
           <nav>
             <ul>
               <li>
                 <NavLink to="/" exact>Início</NavLink>
               </li>

               <li>
                 <NavLink to="/jogadores" exact>Lista Jogadores</NavLink>
               </li>

               <li>
                 <NavLink to="/adicionar" exact>Adicionar Jogador</NavLink>
               </li>
             </ul>
           </nav>
         </header>


         <main>
          <Routes>
            <Route path="/jogadores" element={<Jogadores />} />

            <Route path="/adicionar" element={<AdicionarJogador />} />

            <Route path="/" exact element={<Home />} />

            <Route path="*" element={<PaginaNaoEncontrada />} />
          </Routes>
         </main>
        </div>
    </Router>
  );
}


function PaginaNaoEncontrada(){
  return(
    <div>
      <h1>404</h1>
      <p>página não encontrada!</p>
    </div>
  )
}

export default App;

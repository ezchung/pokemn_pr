import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pokecard from './Pokecard';
import Pokedex from './Pokedex';
import Pokegame from './Pokegame';


function App() {
  return (
    <div className="App">
      <h1 className='App-title'>Pokegame</h1>
      <Pokedex pokemons={POKEMONS}></Pokedex>
      <Pokegame pokemons={POKEMONS}></Pokegame>
    </div>
  );
}

const POKEMONS = [
  {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
  {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
  {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
  {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
  {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
  {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
  {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
  {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
]

export default App;

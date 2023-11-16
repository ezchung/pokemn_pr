import { Pokemon } from './Pokecard';
import { PokemonList } from './Pokedex';
import './Pokegame.css';

/**
 * Props: Pokemon
 * 
 * In return
 *  - sends isWinner, pokemon, 
 */

function Pokegame({pokemons}: {pokemons: PokemonList}){
    //shuffle the array using Fisher-Yates algo
    function shufflePokemons(pkmns: PokemonList): PokemonList {
        for (let i = pkmns.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pkmns[i], pkmns[j]] = [pkmns[j], pkmns[i]];
        }
        return pkmns;
    }

    
}

export default Pokegame;

/*
App renders Pokegame
Pokegame
- Take list of 8 pokemon and randomly assign them into iwo hands of 4 cards each
- Redners two pokedex components

Add the scores of the total experience for each hand of pokemon and pass this total to the pokedex

Pokegame determines which hand is the winner, where the winning hand is the one with the higher total experience
- Then modify the Pokedex component so that it accepts a prop of isWinner
- The winning pokedex is the winning one, displays the message "This Hand Wins"
*/
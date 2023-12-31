import { Pokemon } from './Pokecard';
import Pokedex, { PokemonList } from './Pokedex';
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

    //Split the two
    //Get the experiences of each hand and add them
    const shuffledDeck = shufflePokemons(pokemons);
    const player1 = shuffledDeck.slice(0,(shuffledDeck.length/2));
    const player2 = shuffledDeck.slice((shuffledDeck.length/2));

    //reduce(accumulator, currentVal) exp = accumulator, p is currentObject
    const player1Exp = player1.reduce((exp,p) => {
        return exp + p.base_experience
    },0);
    const player2Exp = player2.reduce((exp,p) => {
        return exp + p.base_experience
    },0);

    console.log(`${player1Exp} is player 1. ${player2Exp} for player 2`)
    let winner;
    if(player1Exp > player2Exp) winner = 1;
    else if(player2Exp > player1Exp) winner = 2;
    else winner = 0;

    return(
        <div>
            <p>{`Player 1: ${player1Exp}`}</p>
            <p>{`Player 2: ${player2Exp}`}</p>
            <h2>Player 1</h2>
            <Pokedex pokemons={player1} isWinner={winner} player={1} ></Pokedex>
            <h2>Player 2</h2>
            <Pokedex pokemons={player2} isWinner={winner} player={2}></Pokedex>
        </div>
    )
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

/*
 * Later can add. User can directly choose which card they want to select. 
All cards start face down. and once a player chooses. The card go to the hand of the player
At the end the experience is calculated or can be calculated along the way.
This can help with working with useState
 */
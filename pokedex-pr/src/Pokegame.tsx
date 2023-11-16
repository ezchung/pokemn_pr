import './Pokegame.css';

/**
 * Props: Pokemon
 * 
 * In return
 *  - sends isWinner, pokemon, 
 */

function Pokegame(){
    
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
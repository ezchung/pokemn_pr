import './Pokedex.css';
import Pokecard from './Pokecard';
import {Pokemon} from './Pokecard';
/**
 * Used to render a sequence of Pokecard components
 * 
 *  Input: Array of objects with information about pokemons
 *  - Object should include
 *         [{ id, name, type, base_experience }, ......]
 *
 * Output: Div with class name of Pokdex
 */
type PokemonList = Pokemon[];

function Pokedex({pokemons, isWinner, player}: {pokemons: PokemonList, isWinner:Number, player:Number}){
    let winnerMessage;
    if(isWinner === player){
        winnerMessage = <h3>Player {`${isWinner}`} Wins!!!</h3>
    }

    return(
        <div className="Pokedex container">
            {winnerMessage}
            <div className="row">
                {pokemons.map(p=> <Pokecard pokemon={p}/>)}
            </div>
        </div>
    )
}

export default Pokedex;
export type {PokemonList}
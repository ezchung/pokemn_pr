import { useState } from 'react';
import './Pokecard.css';

/**
 * Used to create a pokemon card
 * 
 *  Input: Object with information about pokemon
 *  - Object should include 
 *         { id, name, type, base_experience }
 *  - Image will be created with id.
 * 
 *  Output: Div with class name of Pokecard
 */

type Pokemon = {
    id: number;
    name: string;
    type: string;
    base_experience: number;
}
// the pokemon that is being passed in looks like the type Pokemon
function Pokecard({ pokemon }: { pokemon: Pokemon }){
    const [flip, setFlip] = useState(false);
    const POKE_IMG = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`

    function handleFlip(){
        console.log("handleClick")
        setFlip(!flip);
    }

    return(
        <div className='Pokecard'>
            <div className='Pokecard-container'>
                <div className={`Pokecard-inner ${flip ? 'flip' : ''}`} onClick={handleFlip}>
                    <div className="Pokecard-front">
                        <p className="Pokecard-name">{pokemon.name}</p>
                        <img className="Pokecard-img"src={POKE_IMG} alt={pokemon.name} />
                        <p className="Pokecard-type">Type: {pokemon.type}</p>
                        <p className="Pokecard-exp">Exp: {pokemon.base_experience}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokecard

export type {Pokemon}

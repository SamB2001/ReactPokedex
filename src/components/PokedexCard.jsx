import React from 'react'
import axios from 'axios'

const PokedexCard = ({pokemon, index, setTeam}) =>{

    const addToTeam = () => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
        .then((res) => {
            setTeam((prevState) => {
                if(prevState.length === 6) return prevState
                let newState = [...prevState, res.data]
                return newState
            })
        })
    }

    return (
        <div className='pokedex-card'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} className="pokemon-img" />
            <h3>{pokemon.name}</h3>
            <button onClick={addToTeam} >Add To Team</button>
        </div>
    )
}

export default PokedexCard
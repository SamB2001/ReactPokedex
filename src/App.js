import Header from './components/Header'
import TeamSection from './components/TeamSection';
import PokedexSection from './components/PokedexSection';
import axios from 'axios'
import React, {useState, UseEffect, useEffect} from 'react'
import './App.css';

function App() {
  const [allPokemon, setAllPokemon] = useState([])
  const [team, setTeam] = useState([])


  useEffect(() => {
    axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=100000')
    .then ((res) => {
      setAllPokemon(res.data.results)
    })
  }, [])
  

  return (
    <div className="App">
      <Header />
      <TeamSection team={team} />
      <PokedexSection allPokemon={allPokemon} setTeam={setTeam}/>
    </div>
  );
}

export default App;

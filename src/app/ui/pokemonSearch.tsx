'use client'
import { useState } from "react";
import { usePokemonSearch } from "../api/pokemonApi";

export const PokemonSearch = () =>{
    const [name, setName] = useState('');
    const { pokemonData, error, searchPokemon } = usePokemonSearch();
  
    const handleClickButton = () => {
      searchPokemon(name);
    };

  return(
    <div>
        <input type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Digite o nome do Pokémon"  />
      <button onClick={handleClickButton}>Pesquisar</button>
      {pokemonData && !error && (
        <div>
          <h1>{pokemonData.name}</h1>
          <p>Types: {`${pokemonData.types}`}</p>
          <p>Weaknesses: {`${pokemonData.weakness}`}</p>
        </div>
        )}
      {error && !pokemonData && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </div>
  )
}